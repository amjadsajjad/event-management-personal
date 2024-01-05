import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import NewsArticlesRoute from "../pages/NewsArticles/NewsArticlesRoute";
import EventsDetailsRoute from "../pages/EventsDetailsRoute/EventsDetailsRoute";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Profile/Profile";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
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
                element:<PrivateRoute><NewsArticlesRoute></NewsArticlesRoute></PrivateRoute>,
                loader:() => fetch('/public/fakeData2.json')

            },
            {
                path:'/events/:id',
                element:<PrivateRoute><EventsDetailsRoute></EventsDetailsRoute></PrivateRoute>,
                loader:() => fetch('/public/fakeData.json')
                
            },
            {
                path:'/profile',
                element:<Profile></Profile>
            }
        ]
    }
])
export default router;