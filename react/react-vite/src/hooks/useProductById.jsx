import React from 'react'
import { useState, useEffect } from 'react';

const useProductById = (productId) => {

  const [productDetailData, setProductDetailData] = useState([ ]);
  const [isLoading, setIsLoading] = useState(false);
  
    const ProductDetail = async()=>{
      setIsLoading(true);
      try{
        const res = await fetch(`https://dummyjson.com/products/${productId}`)
        const resData = await res.json();
        setProductDetailData(resData);
        console.log(resData);
        setIsLoading(false);
      }
      catch(err){
        console.log("Error fetching product details", err);
        setIsLoading(false);
      }
    };
  
    useEffect(()=>{
      ProductDetail();
    }, [productId])
  return { productDetailData, isLoading };
}

export default useProductById
