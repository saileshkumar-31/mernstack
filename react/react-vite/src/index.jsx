import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {RouterProvider} from "react-router-dom";
import Route from "./route/Route";
import {AppProvider} from "./context/AppContext"


const ReactRoot = ReactDOM.createRoot(document.getElementById("root"));
ReactRoot.render(
<AppProvider>
    <RouterProvider router = {Route}/>
    </AppProvider>);