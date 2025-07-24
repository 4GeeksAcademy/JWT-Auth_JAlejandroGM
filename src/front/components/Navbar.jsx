import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-secondary py-3">
			<div className="container d-flex justify-content-between align-items-center">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">JWT Authentication Proyect</span>
				</Link>
				<Link to="/login">
					<button className="btn btn-primary">Login</button>
				</Link>
			</div>
		</nav>
	);
};