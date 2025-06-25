import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Auth from "../layout/Auth";
import ForgotPass from "../pages/Auth/ForgotPass";
import Coverage from "../pages/coverage/Coverage";
import PrivetRoute from "./PrivetRoute";
import AddParcel from "../pages/AddParcel";

import Dashbord from "../pages/Dashbord";
import MyParcels from "../pages/Dashbord/MyParcels";

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
        path: "/coverage",
        Component: Coverage,
        loader: () => fetch("/data/warehouses.json"),
      },
      {
        path: "/sendParcel",
        element: (
          <PrivetRoute>
            {" "}
            <AddParcel></AddParcel>{" "}
          </PrivetRoute>
        ),
        loader: () => fetch("/data/serviceCenter.json"),
      },
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
  {
    path: "/dashbord",
    element: (
      <PrivetRoute>
        <Dashbord></Dashbord>
      </PrivetRoute>
    ),
    children: [
      {
        path: "myparcel",
        Component: MyParcels,
      },
    ],
  },
]);
export default router;
