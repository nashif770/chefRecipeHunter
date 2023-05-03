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
        loader: () => fetch("https://chef-recipe-server-nashif770.vercel.app/chef"),
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
          fetch(`https://chef-recipe-server-nashif770.vercel.app/chef/${params.chefName}`),
      },
      {
        path: "/recipe",
        element: (
          <PrivateRoute>
            <Recipe></Recipe>
          </PrivateRoute>
        ),
        loader: () => fetch(`https://chef-recipe-server-nashif770.vercel.app/recipe`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
