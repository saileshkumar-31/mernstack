import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../layout/Applayout';
import Errorpage from '../Pages/Errorpage';
import Home from '../Pages/Home';
import {ProductSection  }from '../Pages/ProductSection';
import Counter from '../Pages/Counter';
// import ProductDetails from '../Pages/ProductDetails';
import Contact from '../Pages/Contact/Contact';
import Component from '../Pages/Component';
import ComponentA from '../props/ComponentA';
import { lazy, Suspense } from 'react';
import Expensive from "../props/Expensive"

const ProductDetails = lazy(()=>import("../Pages/ProductDetails"))

const Route = createBrowserRouter([
    {
        path:"/",
        errorElement:<Errorpage/>,
        element:<AppLayout/>,
        children: [
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
        element: (
        <Suspense fallback={<p>LOADING...</p>}>
            <ProductDetails/>
        </Suspense>
        )
    },
    {
        path:"/contact",
        element:<Contact/>
    },
    {
        path:"/component",
        element:<Component/>
    },
    {
        path:"/product",
        element:<ProductSection/>, 
         
    },
    {
        path:"/propsdrilling",
        element: <ComponentA/>
    },
    {
        path:"/expensive",
        element: <Expensive/>
    }        
],
    } 
]);

export default Route
