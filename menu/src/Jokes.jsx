import React, { useEffect, useState } from "react";
import axios from 'axios'
const Jokes = () =>{
const[jokes,setJokes]= useState([])
function generateJokes(){

  const headers = {
    headers:{
              Accept:"application/json"
            } 
          }
  axios.get("https://icanhazdadjoke.com/",headers)
  .then((response)=>{
    setJokes(response.data)
  })
  .catch(()=>{
     console.log('error')
  })
}
useEffect(()=>{
  generateJokes()
},[])
    return(
     <>
       <div className="bg-gray-700 h-190 ">
        <button className="bg-black text-white" onClick={generateJokes}>Jokes</button>
         <p>{jokes.joke}</p>
       </div>
     </>
     )
  }
export default Jokes;