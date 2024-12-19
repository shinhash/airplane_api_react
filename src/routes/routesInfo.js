import { createBrowserRouter } from "react-router-dom";
import Signin from "./Signin";
import Signup from "./Signup";
import Main from "./Main";
import SchedulMgn from "./SchedulMgn";
import Myinfo from "./Myinfo";
import ProtectedRoute from "../components/ProtectedRoute";

export const router = createBrowserRouter([
    {path : "/signin", element : <Signin />},
    {path : "/signup", element : <Signup />},
    {
        path: "/",
        children:[
            {
                path : "main",
                element : <ProtectedRoute><Main /></ProtectedRoute>,
            },
            {
                path : "myinfo",
                element : <ProtectedRoute><Myinfo /></ProtectedRoute>,
            },
            {
                path : "admin/schedule",
                element : <ProtectedRoute><SchedulMgn /></ProtectedRoute>,
            }
        ]
    },
    // {
    //     path : "/admin/user/list",
    //     element : <ProtectedRoute><Main /></ProtectedRoute>,
    // },
    // {
    //     path : "/admin/user/detail",
    //     element : <ProtectedRoute><Main /></ProtectedRoute>,
    // },
]);