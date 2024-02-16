const express=require("express")
const router=express.Router()
const JWT=require("jsonwebtoken")
const bcrypt=require("bcryptjs")
const {userModel} =require('../Models/User')



router.post("/register",async(req,res)=>{
    const {username,password,email}=req.body;

    

    if(!username || !password || !email ){
        return res.json({message:" Empty Fields !!!"})
    }
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
    try{
    const {email,password} = req.body
    if(!email || !password)
    {
        return res.status(400).json({message:"empty fields"})
    }
    const user=await userModel.findOne({email})
    
   
    if(!user){
        return res.status(400).json({message:"user not found !!!"})
    }
   
    const isPasswordValid= await bcrypt.compare(password,user.password)

    if(!isPasswordValid)
    {
        return res.status(400).json({message:"Invalid password !!"})
    }
    if(user.ban==true)
    {
            return res.status(400).json({message:"your account has been banned "})
    }

    const token = JWT.sign({id : user._id},"secret")
   return res.status(200).json({message:"Successfully logged-in",token:token,userID:user._id})
}
catch(error)
{
    return res.status(400).json({message:"error login !!!"})
}


})




module.exports=router