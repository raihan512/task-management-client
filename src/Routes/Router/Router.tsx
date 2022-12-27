import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AddTask from "../../Pages/AddTask/AddTask";
import Home from "../../Pages/Home/Home";

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
            }
        ]
    },

])