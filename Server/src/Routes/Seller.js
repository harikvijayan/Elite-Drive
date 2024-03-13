const express=require("express")
const router=express.Router()
const JWT=require("jsonwebtoken")
const bcrypt=require("bcryptjs")
const {sellerModel} =require('../Models/Seller.js')
const mailformat = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;
const passformat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
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



router.get("/getsellers",async(req,res)=>{
    try{
    const sellerData = await sellerModel.find({})
    return res.status(200).send(sellerData)
    }
    catch(error)
    {
        return res.status(400).json({message:"Error Occured"})
    }
})

router.get('/getseller/:id',async(req,res)=>{
    try{
        const {id}=req.params
       
        const sellerDetail = await sellerModel.findOne({ _id: id });

        return res.status(200).send(sellerDetail)
    }
    catch(error)
    {
        return res.status(400).json({message:"Error Occured"})
    }
})

router.put('/changeban/:id',async(req,res)=>{
    try {
        const { id } = req.params;
        const { ban } = req.body;
        const data = await sellerModel.findByIdAndUpdate(id, { ban });
        if (ban === true) {
          return res.status(200).json({ message: "Successfully Banned Seller", data });
        } else {
          return res.status(200).json({ message: "Successfully Un-Banned Seller", data });
        }
      } catch (error) {
        return res.status(200).json({message:"Ban Operation Not Possible"});
      }
})


router.post('/sellerpassmatch/:id',async(req,res)=>{
    try{
        const {id}=req.params
        const {password}=req.body

        if(!password)
        {
            return res.status(400).json({message:"Empty Field !!!"})
        }
        const seller = await sellerModel.findOne({ _id: id });

        if(!seller)
        {
            return res.status(200).json({message:"Seller not found !!!"})
        }

        const isPasswordValid= await bcrypt.compare(password,seller.password)

        if(!isPasswordValid)
        {
            return res.status(400).json({message:"Invalid password !!"})
        }

        return res.status(200).json({message:"You can now update your Password",status:true})
    }
    catch(error)
    {
        return res.status(400).json({message:"Error Occured"})
    }
})

router.put('/sellerpassupdate/:id',async(req,res)=>{
    try
     {
        const { id } = req.params;
        const { password } = req.body;
        
        if(!password)
        {
            return res.status(400).json({message:"Empty Field"})
        }
        if(!password.match(passformat)) 
        {
            return res.status(400).json({message:" Password should contain Minimum 8 characters,At least one lowercase character,At least one digit,At least one special character ",});
        }
        const hashedPassword=await bcrypt.hash(password,10)
        await sellerModel.findByIdAndUpdate(id,{password:hashedPassword});
        
        res.json({message:"Password Updated successfully"})


      } 
      catch (error) 
      {
        return res.status(200).json({message:"Update Not Possible"});
      }
})

router.put('/sellermailupdate/:id',async(req,res)=>{
    try
     {
        const { id } = req.params;
        const { username,email,address,phoneno } = req.body;
       
        if(!username || !email || !address || !phoneno)
        {
            return res.status(400).json({message:"Empty Field"})
        }
        await sellerModel.findByIdAndUpdate(id,{username,email,address,phoneno});
        
        res.json({message:"Profile Updated successfully👨"})

      } 
      catch (error) 
      {
        return res.status(200).json({message:"Update Not Possible"});
      }
})



module.exports=router