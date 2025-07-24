
const url = "https://zany-fiesta-97q6g547r9r73pj67-3001.app.github.dev/api/signup";

export function useSignup() {
    const signup = async (email, password) => {
        try {
            const resp = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });
            const data = await resp.json();
            return data;
        } catch (e) {
            return { msg: "Network error" };
        }
    };
    return { signup };
}