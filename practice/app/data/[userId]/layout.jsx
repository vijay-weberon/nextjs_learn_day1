import Link from 'next/link'
import React from 'react'
import { Metadata } from 'next';
import axios from 'axios'

export async function generateMetadata(productId) {
     const response = await axios.get(`https://fakestoreapi.com/products/${productId.params.userId}`);
        const product = response.data;
        console.log('product',product.title)
      return {title:product.title}
    }
    
const layout = ({children}) => {
  return (
    <div>Selected Product
        {children}
        <p>To go to all products click the button</p>
        <Link href='../data'><button>Click</button></Link>
    </div>
  )
}

export default layout
