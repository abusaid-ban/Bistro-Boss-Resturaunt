import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Home/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Contact from "../Pages/Contact/Contact";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/menu',
                element:<Menu></Menu>
            },
            {
                path:'order/:category',
                element:<Order></Order>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/secret',
                element:<PrivateRoute><Secret></Secret></PrivateRoute>
            },
        ]
    },
]);

export default router;