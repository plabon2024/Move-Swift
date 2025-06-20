import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";

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
        path: "/signin",
        element: <div>signin :) </div>,
      },
      {
        path: "/signup",
        element: <div>signup :) </div>,
      },
    ],
  },
]);
export default router;
