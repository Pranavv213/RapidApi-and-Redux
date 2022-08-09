import React,{useState,useEffect} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap-grid.css'
import './Card.css'
import {useSelector, useDispatch} from "react-redux";
import {incNumber,decNumber} from "./actions/index"
function Card({image}) {
    const handleButton=()=>{
        let array=myState.items;
        console.log(items)
        setItem({image})
        setItems([...array,item])
        dispatch(incNumber({username:username,items:items}));
        console.log(item)
        console.log(myState)
    }
    const myState=useSelector((state)=> state.changethenum)
    const dispatch = useDispatch();
    const [username,setUsername]=useState('')
    const [items,setItems]=useState([''])
    const [item,setItem]=useState('')
  return (
    
    <div class="Main">
       <div class="content">
        <img onerror='this.src="https://m.media-amazon.com/images/M/MV5BNzY3YTUwYT…eQXVyMjkyNzYwMTc@._V1_UX182_CR0,0,182,268_AL_.jpg"' src={image}></img>
        {/* <button onClick={handleButton}>favourite</button> */}
        </div>
    </div>
  )
}

export default Card