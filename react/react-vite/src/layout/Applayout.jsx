import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UserStore from '../store/UserStore';


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
            <UserStore.Provider value={{name: "MernStack"}}>
            <Header/>
            <Outlet/>
            <Footer/> 
            </UserStore.Provider>
        </div>
    )
}

export default AppLayout
