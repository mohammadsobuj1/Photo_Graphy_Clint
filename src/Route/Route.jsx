import React from 'react';
import {
    createBrowserRouter,

} from "react-router-dom";
import Home from '../Home/Home/Home';
import LayOut from '../LayOut/LayOut';

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayOut />,
        children:[{
            
        }]
    },
]);
export default router;