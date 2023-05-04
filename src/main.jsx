import "./index.css";
import React from "react";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import Blog from "./Pages/Blog/Blog.jsx";
import Home from "./Pages/Home/Home/Home.jsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Login from "./Pages/Shared/Login/Login.jsx";
import Terms from "./Pages/Shared/Terms/Terms.jsx";
import Error from "./Pages/Shared/Error/Error.jsx";
import Register from "./Pages/Shared/Register/Register.jsx";
import RecipeInformation from "./Pages/RecipeInformation/RecipeInformation/RecipeInformation.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./AuthProvider/AuthProvider";
import PrivateRoute from "./Pages/routes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <RecipeInformation />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://master-chef-server-munnahosssain.vercel.app/chefInfo/${params.id}`
          ),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer />
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
