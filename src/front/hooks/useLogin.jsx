
const url = "https://zany-fiesta-97q6g547r9r73pj67-3001.app.github.dev/api/login";

export function useLogin(dispatch) {
    const login = async (email, password) => {
        try {
            const resp = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });
            const data = await resp.json();
            if (data.token) {
                dispatch({ type: "set_token", payload: data.token });
                dispatch({ type: "set_user", payload: data.user });
            }
            return data;
        } catch {
            return { msg: "Network error" };
        }
    };
    return { login };
}