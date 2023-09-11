import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const[products, setproducts]=useState([])
 const nav=useNavigate()
  useEffect(()=>{
    axios.get("http://localhost:8080/product")
    .then((resp)=>{setproducts(resp.data)})
    .catch((err)=>{console.log(err)})
  },[])
    
 const deleteproduct=(id)=>{
    axios.delete("http://localhost:8080/product/"+id)
    .then(()=>{window.location.reload()})
    .catch((err)=>{console.log(err)})
  }
  
  
  return (
    <div>
      <button onClick={()=>{nav("/add")}}>Add Product</button>

      {products.map((el)=>(
        <div key={el._id}>
        <h1>ID: {el._id}</h1>
        <p>Title: {el.title}</p>
        <button onClick={()=>{deleteproduct(el._id)}}>Delete</button>
        <button>Edit</button>
        <button >See more</button>

        </div>
        
      ))

      }
    </div>
  )
}

export default Home
