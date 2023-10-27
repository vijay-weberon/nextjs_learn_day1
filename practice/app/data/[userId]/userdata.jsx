import axios from 'axios'
import { Metadata } from 'next'

export default async function generateMetadata({productId}){
    
        const response = await axios.get(`https://fakestoreapi.com/products/${productId.params.userId}`);
        const product = response.data;
      

      return {title:product.title}
    }