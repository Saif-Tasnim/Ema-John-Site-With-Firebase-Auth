import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'react-toastify/dist/ReactToastify.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';
import Orders from './Components/Orders/Orders';

import Inventory from './Components/Inventory/Inventory';
import LogIn from './Components/LogIn/LogIn';
import cartProducts from './loaders/cartProductsLoader';
import CheckOut from './Components/CheckOut/CheckOut';
import Register from './Components/Register/Register';
import ContextApi from './Provider/ContextApi';
import PrivateRoute from './Routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>,
      },
      {
        path: '/order',
        element: <PrivateRoute> <Orders></Orders>          </PrivateRoute>,
        loader: cartProducts
      },
      {
        path: '/management',
        element: <PrivateRoute><Inventory></Inventory></PrivateRoute> 
      },
      {
        path: 'checkout',
        element: <CheckOut></CheckOut> 
      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      },
      {
        path: 'register',
        element: <Register></Register>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <ContextApi>
      <RouterProvider router={router}></RouterProvider>

    </ContextApi>
  </React.StrictMode>
);


reportWebVitals();
