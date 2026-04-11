import { createContext } from "react";
import { useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({children})=>{
    const name = "contect api second method";
    const [text , setText]= useState("Sailesh");
    const data = {
        name: "REVAMP_24"
    }
    const value ={
        name,
        text,
        setText,
        data
    }

    return(
        <AppContext value={value}> {children}</AppContext>
    )
};

