const express=require("express")
const router=express.Router()
const {sellerModel} =require('../Models/Seller.js')
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

router.delete("/remove/:id",async(req,res)=>{
    try {
        const { id } = req.params
        const products = await productModel.findByIdAndDelete(id)
        res.status(200).json(products,{message:"Product Removed Successsfully..."})
    }
    catch (error) {
        res.status(400).json({message:"Product Can't be removed"})
    }
})

router.put("/change/:id",async(req,res)=>{
    try{

    }
    catch(err){
        
    }

})
module.exports=router