const mongoose=require("mongoose")
const proschema= new mongoose.Schema({
    title:{type:String, required:true, unique:true},
    description:{type:String, required:true},
    price:{type:Number, default:10}
})

module.exports=mongoose.model("product", proschema)
    

