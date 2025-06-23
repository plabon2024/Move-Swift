import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Auth from "../layout/Auth";
import ForgotPass from "../pages/Auth/ForgotPass";
import Coverage from "../pages/Coverage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path:'/coverage',
        Component:Coverage,
      }
    ],
  },
  {
    path: "/",
    Component: Auth,
    children: [
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/forgotpassword",
        Component: ForgotPass,
      },
    ],
  },
]);
export default router;
