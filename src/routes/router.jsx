import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";

const router=createBrowserRouter(
    [
        {
            path:"/",
            element:<HomeLayout></HomeLayout>,
        },
         {
            path:"/auth",
            element:<h2>Authentication layout </h2>
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