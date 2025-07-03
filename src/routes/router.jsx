import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layout/AuthLayout";

const router=createBrowserRouter(
    [
        {
            path:"/",
            element:<HomeLayout></HomeLayout>,
            children:[
                {
                    path:"",
                    element:<Home></Home>
                },
                 {
                    path:"/category/:id",
                    element:<CategoryNews></CategoryNews>,
                    loader: ()=>fetch("/news.json")
                },
            ]
        },
         {
            path:"/auth",
            element:<AuthLayout></AuthLayout>,
            children:[
                {
                    path:"/auth/login",
                    element:<Login></Login>
                },
                 {
                    path:"/auth/register",
                    element:<Register></Register>
                },
            ]
        },
         {
            path:"/news",
            element:<h2>news layout </h2>
        },
         {
            path:"/*",
            element:<h2>System error</h2>
        },
        
    ]
);

export default router;