import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home/Home.jsx";
import RecipeInformation from "./Pages/RecipeInformation/RecipeInformation/RecipeInformation.jsx";
import Login from "./Pages/Shared/Login/Login.jsx";
import Register from "./Pages/Shared/Register/Register.jsx";
import Terms from "./Pages/Shared/Terms/Terms.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <div>Blog</div>,
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
  {
    path: ":id",
    element: <RecipeInformation />,
    loader: ({ params }) =>
      fetch(
        `https://master-chef-server-munnahosssain.vercel.app/chefInfo/${params.id}`
      ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
