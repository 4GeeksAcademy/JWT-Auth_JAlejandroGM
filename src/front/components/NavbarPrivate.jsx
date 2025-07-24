import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const NavbarPrivate = () => {
	const navigate = useNavigate();
	const { dispatch } = useGlobalReducer();

	const handleLogout = () => {
		dispatch({ type: "logout" });
		navigate("/");
	};

	return (
		<nav className="navbar navbar-light bg-secondary py-3">
			<div className="container d-flex justify-content-between align-items-center">
				<span className="navbar-brand mb-0 h1">JWT Authentication Proyect</span>
				<button className="btn btn-danger" onClick={handleLogout}>
					Logout
				</button>
			</div>
		</nav>
	);
};