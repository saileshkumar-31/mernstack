import React,{useState} from 'react'

const Counter = () => {

    var [count,setCount] = useState(0);

    var [name, setName] = useState("SK");

    var [toggle, setToggle] = useState(true);

    var [color, setColor] = useState("true");
  return (
    <div>
        <h1 className="font-bold text-3xl p-5">Counter</h1>
        <div className="flex flex-col gap-5 p-4 ">
            <h1 className="text-3xl">{count}</h1>
            <div className="flex gap-5">
                <button className="bg-green-600 px-5 py-1 rounded-lg text-white" onClick={()=>{
                    setCount(count+1);
                }}>+</button>
                <button className="bg-red-600 px-5 py-1 rounded-lg text-white" onClick={()=>{
                    setCount(count-1);
                }}>-</button>
            </div>
        </div>

        <hr />
{/* string */}
        <div>
            <h1 className="font-bold text-3xl p-5">String</h1>
        <div className="flex flex-col gap-5 p-4 ">
            <h1 className="text-3xl">{name}</h1>
            <div className="flex gap-5">
                <button className="bg-green-600 px-5 py-1 rounded-lg text-white" onClick={()=>{
                    setName("Sailesh Kumar");
                }}>Change</button>
                
            </div>
        </div>


        </div>
<hr />

{/* Toggle*/}
        <div>
            <h1 className="font-bold text-3xl p-5">Toggle</h1>
        <div className="flex flex-col gap-5 p-4 ">
            <h1 className="text-3xl">{toggle ? "True💚":"False❤️"}</h1>
            <div className="flex gap-5">
                <button className="bg-green-600 px-5 py-1 rounded-lg text-white" onClick={()=>{
                    setToggle(!toggle);
                }}>Toggle</button>
                
            </div>
        </div>


        </div>


<hr />

{/* Color Change */}
        <div>
            <h1 className="font-bold text-3xl p-5">Color Change</h1>
        <div className="flex flex-col gap-5 p-4 ">
            <h1 className="text-3xl"> color</h1>
            <div className="flex gap-5">
                <button className={`py-2 px-6 text-white rounded-lg ${color ? "bg-green-600": "bg-red-600"}`} onClick={()=>{
                    setColor(!color);
                }}>Color </button>
                
            </div>
        </div>


        </div>
        

      
    </div>
  )
}

export default Counter
