
import { useState } from "react";
import { useSignup } from "../hooks/useSignup.jsx";

export const Signup = () => {
    const { signup } = useSignup();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMsg("");
        const res = await signup(email, password);
        setLoading(false);
        setMsg(res.msg);
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" >
            <div className="card">
                <div className="card-body">
                    <h2 className="mb-4">Signup</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="signupEmail" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="signupEmail" placeholder="Enter email"
                                value={email} onChange={e => setEmail(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="signupPassword" className="form-label">Password</label>
                            <input type="password" className="form-control" id="signupPassword" placeholder="Password"
                                value={password} onChange={e => setPassword(e.target.value)} required />
                        </div>
                        <button type="submit" className="btn btn-success w-100" disabled={loading}>
                            {loading ? "Loading..." : "Signup"}
                        </button>
                        {msg && <div className="mt-3 alert alert-info">{msg}</div>}
                    </form>
                </div>
            </div>
        </div>
    );
};