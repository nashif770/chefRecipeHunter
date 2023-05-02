import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Chef from "../Pages/Chef/Chef";
import Recipe from "../Pages/Recipe/Recipe";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            },
            {
                path: '/chef',
                element:<Chef></Chef>,
                loader: ()=> fetch(`http://localhost:5000/chef`),
            },
            {
                path: '/chef/:id',
                element:<Chef></Chef>
            },
            {
                path: '/recipe',
                element:<Recipe></Recipe>,
                loader: ()=> fetch(`http://localhost:5000/recipe`),
            },
            {
                path: '/blog',
                element:<Blog></Blog>
            },
        ]
    }
])

export default router;