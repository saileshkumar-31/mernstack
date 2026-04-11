import React from 'react'
import {useState} from "react";
import ComponentB from "../props/ComponentB"
import { useContext } from 'react';
import UserStore from "../store/UserStore"

const ComponentA = () => {
    const setData=()=>{
        setName("Sailesh Kumar")
    }

    const userData = useContext(UserStore);

    const [name, setName] = useState("Sailesh");
  return (
    <div>
      <div>
        <h1>ComponentA {userData.name}</h1>
        <ComponentB name = {name} setName={setData}/>
      </div>
    </div>
  )
}

export default ComponentA
