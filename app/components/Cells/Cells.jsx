'use client'
import {useState} from 'react'
const Cells =()=>{

const [cells,setCells] = useState(['a','b','c'])
const[join,setJoin]    = useState('')

const clickHandler =(e,index)=>{
    setCells([...cells.slice(0,index),'',...cells.slice(index)])
}
const changeHandler =(e,searchedIndex)=>{
    setCells(cells.map((cell,index)=>{
        if(index===searchedIndex){
            return e.target.value
        }
        return cell
    }))
}

const joinHandler =()=>{
    setJoin(cells.join(''))
}

    return(
        <div>
            <div className="flex justify-center ">
            {cells.map((cell,index)=>(
                    <div className=" relative p-20 border-2 border-white rounded-3xl"  key={index}><input onChange={(e)=>changeHandler(e,index)} clastype="text" className="bg-black w-3"  value={cell}/>
                    {index>0&&index<cells.length&&<p className="absolute left-0  top-20 cursor-pointer" onClick={(e)=>clickHandler(e,index)} >+</p>}
                    </div>
            ))}  
            </div>
            <button name="+" className=" m-10 bg-black text-blue-200 rounded-2xl p-4  border-2 border-white
            hover:bg-gray-400 hover:text-red-400 hover:scale-110" onClick={joinHandler} >Join All!</button>
            <h1 className="text-blue-200" >{join}</h1>
        </div>
    )
}
export default Cells;


