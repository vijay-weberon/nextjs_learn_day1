'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Name from './name'
// import styles from "./styles"

const page = () => {
    const [state,setState]=useState([])
    const URL = "https://fakestoreapi.com/products"
    const fetchData=async()=>{
        try{
            let data=await axios.get(URL)
            setState(data.data)
        }
        catch(err){
            console.log(err)
        }

    }
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div >
        <Name/>

        {
            state.map((el)=>(
                <div key={el.id}>
                    <p>{el.title}</p>
                </div>
            ))
        }
    </div>
    
  )
}

export default page