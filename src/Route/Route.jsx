import React from 'react';
import {
    createBrowserRouter,

} from "react-router-dom";
import Home from '../Home/Home/Home';
import LayOut from '../LayOut/LayOut';
import Login from '../Pages/Login/Login';
import Registration from '../Pages/Registration/Registration';

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayOut />,
        children: [

            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: 'registration',
                element: <Registration />
            }

        ]
    },
]);
export default router;