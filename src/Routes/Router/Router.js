import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AddTask from "../../Pages/AddTask/AddTask";
import SignIn from "../../Pages/Auth/SignIn/SignIn";
import SignUp from "../../Pages/Auth/SignUp/SignUp";
import Home from "../../Pages/Home/Home";
import MyTask from "../../Pages/MyTask/MyTask";

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/add-task',
                element: <AddTask></AddTask>
            },
            {
                path: '/my-task',
                element: <MyTask></MyTask>,
                loader: () => fetch('http://localhost:5000/alltask')
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>

            },
            {
                path: '/signin',
                element: <SignIn></SignIn>

            }
        ]
    },

])