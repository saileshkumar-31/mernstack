import React from 'react'
import { useState } from 'react';

const NormalContact = () => {
    

    var [userData, setUserData] = useState({
        name: "",
        email: "",
        message: ""
    });

    console.log(userData);

    var [ data, setData] = useState([ ])


    
   
  return (
    <div className="w-100 h-screen flex flex-col gap-5">
      <div className="w-90 h-screen bg-slate-300 flex flex-col gap-5 ">
        <h1 className="text-3xl font-bold p-5 text-center">Normal Contact Page</h1>
        <form className=" flex flex-col gap-3 p-5 ">

        <div className="flex flex-col gap-5 p-2">
            <label htmlFor="name" className="text-xl ">Name:</label>
            <input type="text"  className=" border-2 py-2 pl-2 rounded-lg outline-none " onChange={(e)=>{
                
                setUserData((prev)=>{
                    return{
                        ...prev,name:e.target.value
                    }
                });

                
            }}/>
        </div>


        < div className="flex flex-col gap-5 p-2">
            <label htmlFor="email" className="text-xl ">Email:</label>
            <input type="email"  className=" border-2 py-2 pl-2 rounded-lg outline-none " onChange={(e)=>{
                
                setUserData((prev)=>{
                    return{
                        ...prev,email:e.target.value
                    }
                });

                
            }}/>
        </div>


        <div className="flex flex-col gap-5 p-2">
            <label htmlFor="message" className="text-xl ">Message:</label>
            <input type="text"  className=" border-2 py-2 pl-2 rounded-lg outline-none " onChange={(e)=>{
                
                setUserData((prev)=>{
                    return{
                        ...prev,message:e.target.value
                    }
                });

                
            }}/>
        </div>


        <div className="flex flex-col gap-5 p-2 w-full">
            <button type="submit" className="text-xl text-white bg-green-600 rounded-lg py-2 px-3" onClick={(prev)=>{
                
                    setData((prev)=>{
                        return[...prev,userData]

                    })
            

            }} >Submit</button>
        </div>

        </form>
      </div>
    </div>
  )
}

export default NormalContact
