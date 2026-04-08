import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AppLayout=()=>{
    // var [count,setCount] =useState(0);
    // var[name, setName] = useState("sailesh kumar");
    // var[mut, setMut] = useState("SSK");
    

    // useEffect(()=>{
    //     console.log("useEffect called");
    //     setCount(count + 1);
    //     console.log(count);
    // },[name , mut])

    return(
        <div>
            <Header/>
            {/* <Counter/>
            
             <Component/>
            <p>{count}</p>
            <p>App Layout</p>
            <h1>{name}</h1>

            <button onClick={()=>{
                setName("SK")
            }}>change</button>

            <h1>{mut}</h1>

             <button onClick={()=>{
                setMut("Sailesh kumar S")
            }}>change</button> */}

            <Outlet/>
            <Footer/> 
        </div>
    )
}

export default AppLayout
