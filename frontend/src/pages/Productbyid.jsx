import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const Productbyid = () => {
  const {id}=useParams()
  const[product, setproduct]=useState([])
  useEffect(()=>{

  axios.get("http://localhost:8080/product/"+id)
  .then((resp)=>{setproduct(resp.data)})
  .catch((err)=>{console.log(err)})
  
  },[])
  console.log(product)
  return (
    <div>
      <h1>ID: {product._id}</h1>
      <p>Title:{product.title}</p>
      <p>Description: {product.description}</p>
      <p>Price: {product.price}</p>
      <Link to="/">Back Home</Link>

    </div>
  )
}

export default Productbyid
