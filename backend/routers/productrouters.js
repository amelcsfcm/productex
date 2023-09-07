const{Router}=require("express")
const { getproducts, getproductsbyid, addproduct, editproduct, deleteproduct } = require("../controllers/Prodcont")
const productrouter=Router()


productrouter.get("/product", getproducts)
productrouter.get("/product/:id", getproductsbyid)
productrouter.post("/product", addproduct)
productrouter.put("/product/:id", editproduct )
productrouter.delete("/product/:id", deleteproduct )

module.exports=productrouter

