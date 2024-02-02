const express=require("express")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcryptjs")
const {userModel} =require('../Models/User.js')

const router=express.Router()

router.post("/register",async(req,res)=>{
    const {username,password,email}=req.body;

    const user=await userModel.findOne({email})

    if(user){
        return res.json({message:" email already in use !!!"})
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
    const isPasswordValid= await bcrypt.compare(password,user.password)

    if(!isPasswordValid)
    {
        return res.json({message:"email or password is invalid.."})
    }

    const token=jwt.sign({id : user._id},"secret")
    res.json({token,userID:user._id})


})




module.exports=router