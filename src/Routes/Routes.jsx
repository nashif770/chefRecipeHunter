import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Chef from "../Pages/Chef/Chef";
import Recipe from "../Pages/Recipe/Recipe";

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
                path: '/',
                element:<Chef></Chef>
            },
            {
                path: '/',
                element:<Recipe></Recipe>
            },
        ]
    }
])

export default router;