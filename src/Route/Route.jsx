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
import AdminRoute from './AdminRoute';
import InstractorRoute from './InstractorRoute';
import PrivateRoute from './PrivetRoute.jsx/PrivateRoute';
import ManageClasses from '../Pages/Dashbord/ManageClasses/ManageClasses';
import Classes from '../Pages/Classes/Classes';
import MySelectedClasses from '../Pages/Dashbord/Student/MySelectedClasses/MySelectedClasses';


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
            {
                path: '/classes',
                element: <Classes />
            },


        ]
    },

    {
        path: 'dashbord',
        element: <PrivateRoute> <Dashbord /></PrivateRoute>,
        children: [

            {
                path: '/dashbord/enroll',
                element: <InstractorRoute> <EnrolledStudent /></InstractorRoute>
            },
            {
                path: '/dashbord/feedback',
                element: <FeedBack />
            },
            {
                path: '/dashbord/addclass',
                element: <InstractorRoute><AddClass /></InstractorRoute>
            },
            {
                path: '/dashbord/allusers',
                element: <AdminRoute><Allusers /></AdminRoute>
            },
            {
                path: '/dashbord/myclass',
                element: <InstractorRoute><MyClass /></InstractorRoute>
            },
            {
                path: '/dashbord/manageclass',
                element: <AdminRoute><ManageClasses /></AdminRoute>
            },
            {
                path: '/dashbord/myselactclaess',
                element:<PrivateRoute> <MySelectedClasses /></PrivateRoute>
            },
        ]
    }
]);
export default router;