import React from 'react'
import ComponentC from "../props/ComponentC"

const ComponentB = ({name, setName}) => {
  return (
    <div>
      <div>
        ComponentB {name}
      </div>
      <div>
        <button onClick={()=>setName()} className="bg-green-300 py-2 px-4 rounded-lg text-center border">Change B</button>
      </div>
      <ComponentC name={name} />

    </div>
  )
}

export default ComponentB
