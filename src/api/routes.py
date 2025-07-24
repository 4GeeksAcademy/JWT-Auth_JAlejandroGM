"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import datetime
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

from flask_cors import CORS
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from werkzeug.security import generate_password_hash, check_password_hash

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    if not email or not password:
        return jsonify({"msg": "Email and password required"}), 400
    if User.query.filter_by(email=email).first():
        return jsonify({"msg": "A user whit this email already exists"}), 400
    user = User()
    user.email = email
    user.password = generate_password_hash(password)
    user.save()
    if user:
        return jsonify({"msg": "User created successfully"}), 201
    return jsonify({"msg": "Error when creating user"}), 500


@api.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    if not email or not password:
        return jsonify({"msg": "Email and password required"}), 400
    user = User.query.filter_by(email=email).first()
    if not user or not check_password_hash(user.password, password):
        return jsonify({"msg": "Invalid credentials"}), 401
    expire = datetime.timedelta(hours=1)
    token = create_access_token(
        identity=str(user.id), expires_delta=expire)
    datos = {
        "token": token,
        "user": user.serialize()
    }
    return jsonify(datos), 200
