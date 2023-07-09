'use client'

import { useState } from "react"

const Counter =()=>{
    const [count, setCount] = useState(0)

    const buttonHandler =(e)=>{
        e.target.name==='+'?setCount(count+1):count>0?setCount(count-1):setCount(0)
    } 


    return(
        <div className="my-11" >
            <p className="my-11">{count}</p>
            
            <button name="+" className=" bg-black text-blue-200 rounded-2xl p-4  border-2 border-white
            hover:bg-gray-400 hover:text-red-400 hover:scale-110" onClick={(e)=>buttonHandler(e)} >Incrementar</button>

             <button name="-" className=" bg-black text-blue-200 rounded-2xl p-4  border-2 border-white
            hover:bg-gray-400 hover:text-red-400 hover:scale-110" onClick={(e)=>buttonHandler(e)} >Decrementar</button>
        </div>
    )
}
export default Counter