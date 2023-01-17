import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import SignIn from "../../Pages/Login/SignIn";
import SignUp from "../../Pages/Login/SingUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <SignIn></SignIn>,
            },
            {
                path: '/sign-up',
                element: <SignUp></SignUp>,
            }
]
    },
]);

export default router;