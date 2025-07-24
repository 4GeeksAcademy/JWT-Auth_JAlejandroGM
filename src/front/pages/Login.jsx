import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useLogin } from "../hooks/useLogin.jsx";


export const Login = () => {
    const { store, dispatch } = useGlobalReducer();
    const { login } = useLogin(dispatch);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMsg("");
        const res = await login(email, password);
        setLoading(false);
        if (res && res.token) {
            navigate("/private");
        } else {
            setMsg(res && res.msg ? res.msg : "Error al iniciar sesión");
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" >
            <div className="card">
                <div className="card-body">
                    <h2 className="mb-4">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="loginEmail" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="loginEmail" placeholder="Enter email"
                                value={email} onChange={e => setEmail(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="loginPassword" className="form-label">Password</label>
                            <input type="password" className="form-control" id="loginPassword" placeholder="Password"
                                value={password} onChange={e => setPassword(e.target.value)} required />
                        </div>
                        <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                            {loading ? "Loading..." : "Login"}
                        </button>
                        {msg && <div className="mt-3 alert alert-info">{msg}</div>}
                    </form>
                </div>
            </div>
        </div>
    );
};