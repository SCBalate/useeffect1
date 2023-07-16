import React from 'react'
import{useState, useEffect} from "react"
function Second() {
const[product,setProduct]= useState([])

     const fakeFetch = (url) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (url === 'https://example.com/api/products') {
              resolve({
                status: 200,
                message: 'Success',
                data: {
                  products: [
                    { name: 'Color Pencils', price: 50, quantity: 40 },
                    { name: 'Sketchpens', price: 110, quantity: 20 },
                    { name: 'Erasor', price: 20, quantity: 20 },
                    { name: 'Sharpner', price: 22, quantity: 30 },
                  ],
                },
              })
            } else {
              reject({
                status: 404,
                message: 'Items list not found.',
              })
            }
          }, 2000)
        })
      }


      const fetchProducts= async()=>{
       
        try{
            const response = await fakeFetch("https://example.com/api/products");
            const {data} = response
setProduct(data.products);
        }catch(err){
            console.error("the data is not fetched successfully",err);
        }
      }

      useEffect(()=>{
        fetchProducts();
      },[])

const filterProduct=()=>{
   const filtered = product.filter((x)=>x.quantity > 20)
   setProduct(filtered)
}

const filterByPrice=()=>{
    const filtered = product.filter((x)=>x.price > 100)
    setProduct(filtered);
}

  return (
    <div>
        <button onClick={filterProduct}>Show Product quantity more than 20</button>
        <button onClick={filterByPrice}>Filter By Price</button>
        <ul>{product.map((X,index)=>{
            return(
                <li key={index}>{X.name} - Rs.{X.price} - Quantity{X.quantity}</li>
            )

        })}</ul>
    </div>
  )
}

export default Second