import React from 'react'
import HeroSection from './HeroSection';
import { ProductSection } from './ProductSection';  
import {useContext} from "react";
import {AppContext} from "../context/AppContext"

const Home =()=>{
    const {name, text, setText, data} = useContext(AppContext);
    console.log("data from the context", data);
    return(
        <div>
            <p>{name}</p>
            <p>{text}</p>
            <p>{data.name}</p>
            <button onClick ={()=>{
                setText("Sam")
            }}>Click Here</button>
            <HeroSection/>
            <ProductSection/>
        </div>
    )
}

export default Home
