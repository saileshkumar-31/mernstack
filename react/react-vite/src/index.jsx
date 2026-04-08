import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {RouterProvider} from "react-router-dom";
import Route from "./route/Route";


const ReactRoot = ReactDOM.createRoot(document.getElementById("root"));
ReactRoot.render(<RouterProvider router = {Route}/>);