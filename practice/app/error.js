'use client'

import { useEffect } from "react"

const error = ({error,reset}) => {

    useEffect(()=>{
        console.log("The error accured is ",error)
    },[error])
  return (
  <>
 
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
        <h1>A new error has been accured    </h1> &nbsp; 
        <button onClick={()=>reset()}>Reset</button>
     </div>
    </>
   
  )
}

export default error