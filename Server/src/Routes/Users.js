const express=require("express")
const router=express.Router()
const JWT=require("jsonwebtoken")
const bcrypt=require("bcryptjs")
const {userModel} =require('../Models/User')
const{productModel}=require('../Models/Products.js')

const mailformat = /^[a-zA-Z0-9.!#$%&.’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passformat = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
const txt = /.com/;



router.post("/register",async(req,res)=>{
    const {username,password,email}=req.body;
    

    if (!username || !email || !password) {
        return res.json({ message: "Fields are Empty" });
    }

   
    const isEmailValid = mailformat.test(email) && txt.test(email);
    if (!isEmailValid) {
        return res.status(400).json({ message: "Enter a valid email" });
    }
    if (!password.match(passformat)) 
    {
        return res.status(400).json({message:" Password should contain Minimum 8 charactersAt least one uppercase character,At least one lowercase character,At least one digit,At least one special character ",});
    }
    const user=await userModel.findOne({email})   
    if(user){
        return res.json({message:" email already in use !!!"})
    }
    const hashedPassword=await bcrypt.hash(password,10)
    const newUser=new userModel({username,password:hashedPassword,email})
    await newUser.save()
    res.json({message:"user registered successfully 👨‍💼!!! "})
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



router.get("/getusers",async(req,res)=>{
    try{
    const userData = await userModel.find({})
    return res.status(200).send(userData)
    }
    catch(error)
    {
        return res.status(400).json({message:"Error Occured"})
    }
})

router.get('/getuser/:id',async(req,res)=>{
    try{
        const {id}=req.params
        const userDetail = await userModel.findOne({ _id: id });
        return res.status(200).send(userDetail)
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
        const data = await userModel.findByIdAndUpdate(id, { ban });
        if (ban === true) {
          return res.status(200).json({ message: "Successfully Banned User", data });
        } else {
          return res.status(200).json({ message: "Successfully Un-Banned User", data });
        }
      } catch (error) {
        return res.status(200).json({message:"Ban Operation Not Possible"});
      }
})


router.post('/userpassmatch/:id',async(req,res)=>{
    try{
        const {id}=req.params
        const {password}=req.body

        if(!password)
        {
            return res.status(400).json({message:"Empty Field !!!"})
        }
        const user = await userModel.findOne({ _id: id });

        if(!user)
        {
            return res.status(200).json({message:"User not found !!!"})
        }

        const isPasswordValid= await bcrypt.compare(password,user.password)

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

router.put('/userpassupdate/:id',async(req,res)=>{
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
        await userModel.findByIdAndUpdate(id,{password:hashedPassword});
        
        res.json({message:"Password Updated successfully👨"})
        


      } 
      catch (error) 
      {
        return res.status(200).json({message:"Update Not Possible"});
      }
})

router.put('/usermailupdate/:id',async(req,res)=>{
    try
     {
        const { id } = req.params;
        const { username,email } = req.body;
        if(!username || !email)
        {
            return res.status(400).json({message:"Empty Field"})
        }
        await userModel.findByIdAndUpdate(id,{username,email});
        res.status(200).json({message:"Profile Updated successfully👨"})

      } 
    catch (error) 
      {
        return res.status(200).json({message:"Update Not Possible"});
      }
})

router.get('/getallintrest/:id',async(req,res)=>{
    try
    {
    const {id}=req.params

    const user = await userModel.findById({_id:id})
  
    const product = await productModel.find({_id : { $in : user.intrest }})
   
    res.status(200).send(product)
    }
    catch(error)
    {
        res.status(400).json({message:"Unable to fetch products"})
    }
})

router.put('/addtointrest/:id',async (req, res) => {
    try 
    {
      const { id } = req.params;
      const user = await userModel.findById({_id : id});
      const product = await productModel.findById(req.body.itemid);
    if (!user.intrest.includes(product._id))
    {
        user.intrest.push(product._id);
        await user.save();
        res.status(200).json({ message: "successfully added to your intrests" });
    } 
    else 
    {
        res.status(400).json({ message: "Item already in intrests" });
    }
    } 
    catch (error) 
    {
      res.status(400).json({ message: "unable to add to your intrests", error });
    }
  })


router.put('/removefromintrest/:id',async (req, res) => {
    try
    {
      const { id } = req.params;
      const { itemid } = req.body;
  
      await userModel.updateOne({ _id: id }, { $pull: { intrest: itemid } });
      res.status(200).json({message: "Successfully removed from intrests"});
    } 
    catch (error) 
    {
      return res.status(400).json({ message: "Unable to remove" });
    }
  })

module.exports=router