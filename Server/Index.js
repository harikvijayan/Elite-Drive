const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const Routes=require('./src/Routes/Users.js')
const Route=require('./src/Routes/Admin.js')
const Routee=require('./src/Routes/Seller.js')
const productRoute=require('./src/Routes/Product.js')
const reportRoute=require('./src/Routes/Report.js')
const app=express()
app.use(express.json())
app.use(cors())

app.use("/auth",Routes)
app.use("/admin",Route)
app.use("/seller",Routee)
app.use("/product",productRoute)
app.use("/report",reportRoute)

mongoose.connect("mongodb+srv://harikv03:harivijayan123@products.ikfc7uu.mongodb.net/products")
        .then(()=>{console.log("DataBase Connected !!!");})
        .catch(err=>console.log(err))

app.listen(5000,()=>{
    console.log("SERVER STARTED !!!!");
})