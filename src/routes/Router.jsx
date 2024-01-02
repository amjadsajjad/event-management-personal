import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import NewsArticlesRoute from "../pages/NewsArticles/NewsArticlesRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:() => fetch('/public/fakeData.json')

            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/news-articles/:id',
                element:<NewsArticlesRoute></NewsArticlesRoute>,
                loader:() => fetch('/public/fakeData2.json')

            }
        ]
    }
])
export default router;