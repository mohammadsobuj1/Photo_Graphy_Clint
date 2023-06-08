import React from 'react';
import {
    createBrowserRouter,

} from "react-router-dom";
import Home from '../Home/Home/Home';
import LayOut from '../LayOut/LayOut';
import Login from '../Pages/Login/Login';
import Registration from '../Pages/Registration/Registration';
import Dashbord from '../LayOut/Dashbord';
import AddClass from '../Pages/Dashbord/Instractor/AddClass/AddClass';
import EnrolledStudent from '../Pages/Dashbord/Instractor/EnrolledStudent/EnrolledStudent';
import FeedBack from '../Pages/Dashbord/Instractor/FeedBack/FeedBack';
import Allusers from '../Pages/Dashbord/Allusers/Allusers';
import MyClass from '../Pages/Dashbord/Instractor/Myclass/MyClass';


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
            },
          

        ]
    },

    {
        path: 'dashbord',
        element: <Dashbord />,
        children: [
          
            {
                path: '/dashbord/enroll',
                element: <EnrolledStudent />
            },
            {
                path: '/dashbord/feedback',
                element: <FeedBack />
            },
            {
                path: '/dashbord/addclass',
                element: <AddClass />
            },
            {
                path: '/dashbord/allusers',
                element: <Allusers />
            },
            {
                path: '/dashbord/myclass',
                element: <MyClass />
            },
        ]
    }
]);
export default router;