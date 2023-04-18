import React,{useState} from 'react'

function Functionstate(){
  const[name,setName]= useState ('Uki');
  const handleChange=()=>{
    setName('Uki.life');
  } 
  return (
    <div>
      WELCOME TO {name}
      <button onclick={handleChange}></button>
    </div>
  )
}
export default Functionstate
