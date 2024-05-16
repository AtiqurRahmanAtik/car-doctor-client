import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Componets/Root/Root';
import ErrorPage from './Componets/ErrorPage/ErrorPage';
import Home from './Componets/Home/Home';
import Login from './Componets/Login/Login';
import Registration from './Componets/Registration/Registration';
import AuthProvider from './Componets/AuthProvider/AuthProvider';
import MoreDetails from './Componets/MoreDetails/MoreDetails';

import Bookings from './Componets/Bookings/Bookings';









const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Registration></Registration>
      },
      {
        path: '/booking',
        element: <Bookings></Bookings>,
        // loader : ({params}) => fetch(`http://localhost:5000/booking/${params.email}`)
      },
      

      {
        path: '/check/:id',
        element : <MoreDetails></MoreDetails>,
        loader : ({params}) => fetch(`http://localhost:5000/service/${params.id}`)
       
        
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>

  </React.StrictMode>,
)
