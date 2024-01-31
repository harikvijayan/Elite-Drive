const express=require("express")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcryptjs")
const {userModel} =require('../Models/User.js')

const router=express.Router()

router.post("/register",async(req,res)=>{
    const {username,password,email}=req.body;

    const user=await userModel.findOne({email})

    if(user){
        return res.json({message:" email already registered !!!"})
    }

    const hashedPassword=await bcrypt.hash(password,10)

    const newUser=new userModel({username,password:hashedPassword,email})
    await newUser.save()
    res.json({message:"user registered successfully!!! "})
})


router.post("/login",async(req,res)=>{
    const {email,password}=req.body
    const user=await userModel.findOne({email})

    if(!user){
        return res.json({message:"user not found !!!"})
    }

})




module.exports=router