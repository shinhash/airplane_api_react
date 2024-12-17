import { createBrowserRouter } from "react-router-dom";
import Signin from "./Signin";
import Signup from "./Signup";
import Main from "./Main";

export const router = createBrowserRouter([
    {path : "/signin", element : <Signin />},
    {path : "/signup", element : <Signup />},
    {path : "/main", element : <Main />},
]);