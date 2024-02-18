const express=require("express")
const router=express.Router()
const JWT=require("jsonwebtoken")
const bcrypt=require("bcryptjs")
const {sellerModel} =require('../Models/Seller.js')
const mailformat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passformat = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
const txt = /.com/;

router.post("/register",async(req,res)=>{
    const {username,password,email,address,phoneno}=req.body;

    
    if(!username || !password || !email || !address || !phoneno )
    {
        return res.json({message:" empty fields !!!"})
    }
    const isEmailValid = mailformat.test(email) && txt.test(email);
    if (!isEmailValid) {
        return res.status(400).json({ message: "Enter a valid email" });
    }
    if (!password.match(passformat)) 
    {
        return res.status(400).json({message:" Password should contain Minimum 8 charactersAt least one uppercase character,At least one lowercase character,At least one digit,At least one special character ",});
    }
    const seller=await sellerModel.findOne({email})
    if(seller){
        return res.json({message:" email already in use !!!"})
    }

    const hashedPassword=await bcrypt.hash(password,10)

    const newSeller=new sellerModel({username,password:hashedPassword,email,address,phoneno})
    await newSeller.save()
    res.status(200).json({message:"Seller registered successfully!!! "})
})



router.post("/login",async(req,res)=>{
    try{
    const {email,password} = req.body
    if(!email || !password)
    {
        return res.status(400).json({message:"empty fields"})
    }
    const seller = await sellerModel.findOne({email})
    
   
    if(!seller){
        return res.status(400).json({message:"user not found !!!"})
    }

    if(seller.ban==true){
        return res.status(400).json({message:"Your account has been banned"})
    }
   
    const isPasswordValid= await bcrypt.compare(password,seller.password)

    if(!isPasswordValid)
    {
        return res.status(400).json({message:"Invalid password !!"})
    }

    const token = JWT.sign({id : seller._id},"secret")
   return res.status(200).json({message:"Successfully logged-in",token:token,sellerID:seller._id})
}
catch(error)
{
    return res.status(400).json({message:"error login !!!"})
}


})



module.exports=router