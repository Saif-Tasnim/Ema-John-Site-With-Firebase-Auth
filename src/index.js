import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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
        element: <Orders></Orders>,
        loader: cartProducts 
      },
      {
        path: '/management',
        element: <Inventory></Inventory>
      },
      {
           path: 'checkout',
           element: <CheckOut></CheckOut>
      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);


reportWebVitals();
