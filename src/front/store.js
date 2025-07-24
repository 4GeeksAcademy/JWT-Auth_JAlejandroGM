function getInitialToken() {
  try {
    const token = sessionStorage.getItem("token");
    return token ? token : null;
  } catch {
    return null;
  }
}

export const initialStore = () => ({
  token: getInitialToken(),
  user: null,
});

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "set_token": {
      if (action.payload) {
        sessionStorage.setItem("token", action.payload);
      } else {
        sessionStorage.removeItem("token");
      }
      return { ...store, token: action.payload };
    }
    case "set_user":
      return { ...store, user: action.payload };
    case "logout": {
      sessionStorage.removeItem("token");
      return { token: null, user: null };
    }
    default:
      throw Error("Unknown action.");
  }
}
