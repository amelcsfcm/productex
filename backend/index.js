const express = require("express");
const productrouter = require("./routers/productrouters");
require("./config/productdb").connect();
const cors = require("cors");
const Authrouter = require("./routers/authrouters");
const app = express();
app.use(express.json());
app.use(cors());
app.use(productrouter);
app.use(Authrouter);

app.listen(8080, () => {
  console.log("listening to port 8080");
});
