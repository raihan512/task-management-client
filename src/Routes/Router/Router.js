import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AddTask from "../../Pages/AddTask/AddTask";
import SignIn from "../../Pages/Auth/SignIn/SignIn";
import SignUp from "../../Pages/Auth/SignUp/SignUp";
import CompletedTask from "../../Pages/CompletedTask/CompletedTask";
import Home from "../../Pages/Home/Home";
import MyTask from "../../Pages/MyTask/MyTask";
import Update from "../../Pages/Update/Update";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                element: <PrivateRoute><AddTask></AddTask></PrivateRoute>
            },
            {
                path: '/my-task',
                loader: () => fetch('http://localhost:5000/alltask'),
                element: <PrivateRoute><MyTask></MyTask> </PrivateRoute>
            },
            {
                path: '/completedtask',
                element: <PrivateRoute><CompletedTask></CompletedTask></PrivateRoute>
            },
            {
                path: '/update/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/alltask/${params.id}`),
                element: <PrivateRoute><Update></Update></PrivateRoute>
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