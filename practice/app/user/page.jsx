'use client'
import React, { useState } from 'react'

const page = () => {
    // const [state,setState]=useState(0)
    const handleClick=()=>{
        console.log("Button Clicked")
        setState(state+1)
    }
  return (
    <>
    <button onlick={handleClick}> Increment</button>
    <h1>State: {state}</h1>
    </>
  )
}

export default page