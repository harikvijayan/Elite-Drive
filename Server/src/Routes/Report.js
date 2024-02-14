const express=require("express")
const router=express.Router()
const {reportModel} =require('../Models/Report.js')

router.post("/add",async(req,res)=>{
    const {report,loginid}=req.body;

    if(!report)
    {
        return res.json({message:" empty fields !!!"})
    }
    if(!loginid)
    {
        return res.status(400).json({message:"Login required"})
    }

    const newReport=new reportModel({report})
    await newReport.save()
    res.json({message:"Report Submitted successfully!!! "})
})