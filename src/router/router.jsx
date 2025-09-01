import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import ProtectedRoute from "../components/ProtectedRoute";
import AddJob from "../pages/addJob/AddJob";
import UpdateJob from "../pages/updateJob/UpdateJob";

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
        path: "/addJob",
        element: (
          <ProtectedRoute>
            <AddJob></AddJob>
          </ProtectedRoute>
        ),
      },
      {
        path: "/updateJob/:id",
        element: (
          <ProtectedRoute>
            <UpdateJob></UpdateJob>
          </ProtectedRoute>
        ),
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
]);

export default router;
