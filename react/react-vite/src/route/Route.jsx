import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../layout/Applayout';
import Errorpage from '../Pages/Errorpage';
import Home from '../Pages/Home';
import {ProductSection , ProductCard }from '../Pages/ProductSection';
import Counter from '../Pages/Counter';
import ProductDetails from '../Pages/ProductDetails';
import Contact from '../Pages/Contact/Contact';
import Component from '../Pages/Component';

const Route = createBrowserRouter([
    {
        path:"/",
        errorElement:<Errorpage/>,
        element:<AppLayout/>,
        children:[
            {
        path:"/",
        element:<Home/>   
    },
    {
        path:"/counter",
        element:<Counter/>   
    },
    {
        path:"/productdetails/:productId",
        element:<ProductDetails/>
    },
    {
        path:"/contact",
        element:<Contact/>
    },
    {
        path:"/component",
        element:<Component/>
    }       
        ],
    },
    {
        path:"/product",
        element:<ProductSection/> , 
         
    }
    
]);

export default Route
