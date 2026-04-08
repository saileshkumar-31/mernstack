import React from 'react'
import { useState, useEffect } from 'react';


const useFetchProductData = () => {

    const [productData, setProductsData] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    
    const fetchData= async ()=>{
      try {
        setIsLoading(true);
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProductsData(data.products);
        setIsLoading(false);
      }catch (error){
        console.error("Error fetching data: ", error);
        setIsLoading(false);
      }
    };
    useEffect(()=>{
        console.log("fetching data...");
        fetchData();
    },[]);
  return { productData, isLoading };
    
}


export default useFetchProductData
