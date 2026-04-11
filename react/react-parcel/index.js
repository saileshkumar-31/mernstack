import React from "react";
import ReactDOM from "react-dom/client";

const headingReactElement = React.createElement("h1",null,"hello sailesh kumar");
const ReactRoot = ReactDOM.createRoot(document.getElementById("root"));
ReactRoot.render(headingReactElement);