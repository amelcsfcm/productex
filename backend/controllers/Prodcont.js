const product = require("../model/product")

module.exports.getproducts= async (req,resp)=>{
const products= await product.find();
return(
    resp.status(200).json(products)
)}

module.exports.getproductsbyid= async (req,resp)=>{
    const {id}=req.params
    const products= await product.findById(id)
    return(
        resp.status(200).json(products)
    )}

module.exports.addproduct=(req,resp)=>{
    const{title, description, price}=req.body
    const proadd= new product({
        title, description, price
    })
    proadd.save()
    .then(()=>{return resp.status(200).json({msg:"product added"})})
    .catch((e)=>{return resp.status(404).json({msg:e.message})})
}

module.exports.editproduct=(req,resp)=>{
    const{title, description, price}=req.body
    const {id}=req.params
    product.findByIdAndUpdate(id,{title, description, price})
    .then(()=>{return resp.status(200).json({msg:"product updated"})})
    .catch((e)=>{return resp.status(404).json({msg:e.message})})
}
module.exports.deleteproduct=(req,resp)=>{
    const {id}=req.params
    product.findByIdAndDelete(id)
    .then(()=>{return resp.status(200).json({msg:"product deleted"})})
    .catch((e)=>{return resp.status(404).json({msg:e.message})})
}



