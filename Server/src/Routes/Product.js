const express=require("express")
const router=express.Router()
const JWT=require("jsonwebtoken")
const bcrypt=require("bcryptjs")
const {productModel} =require('../Models/Products.js')

router.post("/add",async(req,res)=>{
    const {name,brand,color,price,photo,mileage,year,fuel,enginecc,owner,loginid}=req.body;

    if(!name || !brand || !color || !price || !photo || !mileage || !year || !fuel || !enginecc || !owner)
    {
        return res.json({message:" empty fields !!!"})
    }
    if(!loginid)
    {
        return res.status(400).json({message:"Login required"})
    }

    const newProduct=new productModel({name,brand,color,price,photo,mileage,year,fuel,enginecc,owner})
    await newProduct.save()
    res.json({message:"product added successfully!!! "})
})

module.exports=router