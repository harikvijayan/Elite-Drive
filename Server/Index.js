const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const Routes=require('./src/Routes/Users.js')

const app=express()
app.use(express.json())
app.use(cors())

app.use("/auth",Routes)

mongoose.connect("mongodb://127.0.0.1:27017/Users")
        .then(()=>{console.log("DataBase Connected !!!");})
        .catch(err=>console.log(err))

app.listen(5000,()=>{
    console.log("SERVER STARTED !!!!");
})