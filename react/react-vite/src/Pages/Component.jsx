import { useState } from "react"
import React from 'react'

const Component = () => {



var[userdata,setUserdata]= useState({name:"", comment:"",callbck:""})
console.log("userdata: ",userdata);


var[data, setData]= useState([])


  return (
    <div className="flex flex-col gap-5 p-4  " >
      <h1 className="text-3xl font-bold text-center">Forms</h1>
        <div className="flex flex-col gap-5 p-2">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Enter your name" className="border-2 border-gray-400 p-2 rounded-lg" 
            onChange={(e)=>{
                console.log(e.target.value);
               
                setUserdata({...userdata,name:e.target.value});
            }}
            />
            

        </div>  
        <div className="flex flex-col gap-5 p-2">
            <label htmlFor="text">Comment</label>
            <input type="text" placeholder="Enter your comment" className="border-2 border-gray-400 p-2 rounded-lg"
            onChange={(e)=>{
                console.log(e.target.value); 
                
                setUserdata({ ...userdata,comment:e.target.value}) 

            }}
            />

        </div>

        <div className="flex flex-col gap-5 p-2">
            <label htmlFor="text">Call bck</label>
            <input type="text" placeholder="for callback func eg" className="border-2 border-gray-400 p-2 rounded-lg"
            onChange={(e)=>{
                
                setUserdata((prev)=>{
                    return{
                        ...prev,callbck:e.target.value
                    }

                })

            }}
            />

        </div>
        
        <div className="flex flex-col gap-5 p-2 w-full">
            <button className="bg-blue-600 px-5 py-1 rounded-lg text-white" 
            onClick={()=>{
                setData((prev)=>{
                    return[...prev,userdata]
                })
            }}
        >Submit</button>
        </div>
        <div className="grid grid-cols w-full">
            <div className="border p-3 rounded-lg shadow-lg grid grid-cols-4 w-full gap-4">
                {data.map((item,index)=>{
                    return(
                        <div key={index}>
                            <p>{item.name}</p>
                            <p>{item.comment}</p>
                            <p>{item.callbck}</p>
                        </div>
                    )
                })}

            </div>
        </div>
    </div>
  )
}

export default Component
