import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layout/AuthLayout";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "../provider/privateRoute";

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
            path:"/news-details/:id",
            element:<PrivateRoute>
                <NewsDetails></NewsDetails>
            </PrivateRoute>,
            loader: ()=>fetch("/news.json")
            
         },
         {
            path:"/*",
            element:<h2>System error</h2>
        },
        
    ]
);

export default router;