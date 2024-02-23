const express=require("express")
const router=express.Router()
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

    const newProduct=new productModel({name,brand,color,price,photo,mileage,year,fuel,enginecc,owner,loginid})
    await newProduct.save()
    res.json({message:"product added successfully!!! "})
})

router.delete("/remove/:id",async(req,res)=>{
    try {
        const { id } = req.params
        await productModel.findByIdAndDelete(id)
        res.status(200).json({message:"Product Removed Successsfully..."})
    }
    catch (error) {
        res.status(400).json({message:"Product Can't be removed"})
    }
})

router.get('/getallcars',async(req,res)=>{
    try{
    const allProducts=await productModel.find({})
    return res.status(200).send(allProducts)
    }
    catch(err)
    {
        return res.json({message:"error in fetching all products"})
    }
})


router.get('/getsellerproduct/:id',async(req,res)=>{
    try{
    const {id}=req.params
  
    const sellerProducts=await productModel.find({loginid:id})
    
    return res.status(200).send(sellerProducts)
    }
    catch(err)
    {
        return res.status(400).json({message:"error in fetching all products"})
    }
})

router.get('/getspecproduct/:id',async(req,res)=>{
    try{
    const {id}=req.params
  
    const sellerProducts=await productModel.findOne({_id:id})
    
    return res.status(200).send(sellerProducts)
    }
    catch(err)
    {
        return res.status(400).json({message:"error in fetching all products"})
    }
})

router.put("/sold/:id",async(req,res)=>{
    try{
        const {id}=req.params;
        const{sold}=req.body;
        await productModel.findByIdAndUpdate(id,{sold})
        if (sold === true) 
        {
            return res.status(200).json({ message: "Successfully Set As Sold"});
        } 
        else 
        {
            return res.status(200).json({ message: "Successfully Set As UnSold"});
        }
    }
    catch(err){
        return res.status(400).json({ message: "Error Setting Sold Property "});
    }

})

router.put('/sellproupdate/:id',async(req,res)=>{
    try
     {
        const { id } = req.params;
        const { name,brand,color,price,photo,mileage,fuel,owner,enginecc,year,loginid } = req.body;
       
        if(!name || !brand || !color || !price || !photo || !mileage || !fuel || !owner || !enginecc || !year)
        {
            return res.status(400).json({message:"Empty Field"})
        }
        await productModel.findByIdAndUpdate(id,{name,brand,color,price,photo,mileage,fuel,owner,enginecc,year,loginid});
        
        res.json({message:"Product Updated successfully👨"})

      } 
      catch (error) 
      {
        return res.status(200).json({message:"Update Not Possible"});
      }
})

module.exports=router