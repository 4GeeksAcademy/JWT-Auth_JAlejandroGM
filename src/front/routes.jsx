import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { LayoutPrivate } from "./pages/LayoutPrivate";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";

import { Private } from "./pages/Private";
import { Navigate, Outlet } from "react-router-dom";
import useGlobalReducer from "./hooks/useGlobalReducer.jsx";

function RequireAuth() {
  const { store } = useGlobalReducer();
  if (!store.token) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>
        <Route index element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Route>
      <Route element={<RequireAuth />}>
        <Route path="/private" element={<LayoutPrivate />} errorElement={<h1>Not found!</h1>}>
          <Route index element={<Private />} />
        </Route>
      </Route>
    </>
  )
);