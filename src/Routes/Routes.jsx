import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Home/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import Contact from "../Pages/Contact/Contact";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../LayOut/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: 'order/:category',
                element: <Order></Order>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/secret',
                element: <PrivateRoute><Secret></Secret></PrivateRoute>
            },
        ],

    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            {
                path: 'mycart',
                element: <MyCart></MyCart>
            }
        ]
    }
]);

export default router;