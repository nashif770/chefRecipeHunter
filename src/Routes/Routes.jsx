import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Recipe from "../Pages/Recipe/Recipe";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import ChefRecipe from "../Pages/Home/ChefRecipe/ChefRecipe";
import PrivateRoute from "./PrivateRoute";
import Terms from "../Pages/Login/Register/Terms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/chef"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/terms",
        element: <Terms></Terms>,
      },
      {
        path: "/chefRecipe/:chefName",
        element: (
          <PrivateRoute>
            <ChefRecipe></ChefRecipe>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chef/${params.chefName}`),
      },
      {
        path: "/recipe",
        element: (
          <PrivateRoute>
            <Recipe></Recipe>
          </PrivateRoute>
        ),
        loader: () => fetch(`http://localhost:5000/recipe`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
