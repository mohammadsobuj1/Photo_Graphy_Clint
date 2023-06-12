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
import Allusers from '../Pages/Dashbord/Allusers/Allusers';
import MyClass from '../Pages/Dashbord/Instractor/Myclass/MyClass';
import AdminRoute from './AdminRoute';
import InstractorRoute from './InstractorRoute';
import PrivateRoute from './PrivetRoute.jsx/PrivateRoute';
import ManageClasses from '../Pages/Dashbord/ManageClasses/ManageClasses';
import Classes from '../Pages/Classes/Classes';
import MySelectedClasses from '../Pages/Dashbord/Student/MySelectedClasses/MySelectedClasses';
import Payment from '../Pages/Dashbord/Student/Payment/Payment';
import MyEnroll from '../Pages/Dashbord/Student/MyEnroll/MyEnroll';
import PaymentHistorey from '../Pages/Dashbord/Student/PaymentHistorey/PaymentHistorey';
import TotalEnroll from '../Pages/Dashbord/Instractor/TotalEnroll/TotalEnroll';
import Update from '../Pages/Dashbord/Instractor/Myclass/Update';
import Instractore from '../Pages/Instractore/Instractore';
import Feedback from '../Pages/Dashbord/ManageClasses/Feedback';
import Error from '../Components/Error/Error';






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
                element:<Classes />
            },
            {
                path: '/instractor',
                element: <Instractore />
            },


        ]
    },

    {
        path: 'dashbord',
        element: <PrivateRoute> <Dashbord /></PrivateRoute>,
        children: [

           
            
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
                path: '/dashbord/totalenroll',
                element: <InstractorRoute><TotalEnroll /></InstractorRoute>
            },
            {
                path: '/dashbord/updateclass/:id',
                element: <InstractorRoute><Update /></InstractorRoute>,
                loader: ({ params }) => fetch(`https://assainment-sarver.vercel.app/updateclass/${params.id}`)
            },
            {
                path: '/dashbord/manageclass',
                element: <AdminRoute><ManageClasses /></AdminRoute>
            },
            {
                path: '/dashbord/myselactclaess',
                element: <PrivateRoute> <MySelectedClasses /></PrivateRoute>
            },
            {
                path: '/dashbord/payment/:id',
                element: <PrivateRoute> <Payment /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assainment-sarver.vercel.app/selactedclass/${params.id}`)
            },
            {
                path: '/dashbord/feedback/:id',
                element: <PrivateRoute> <Feedback /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assainment-sarver.vercel.app/feedback/${params.id}`)
            },
            {
                path: '/dashbord/myenroll',
                element: <PrivateRoute> <MyEnroll /></PrivateRoute>,
               
            },
            {
                path: '/dashbord/historey',
                element: <PrivateRoute> <PaymentHistorey /></PrivateRoute>,
               
            },
        ]
    },
    {
        path:"*",
        element:<Error/>
    }


]);
export default router;