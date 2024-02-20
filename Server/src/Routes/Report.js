const express=require("express")
const router=express.Router()
const {userReportModel,sellerReportModel} =require('../Models/Report.js')

router.post("/addbyseller",async(req,res)=>{
    const {sellerreport,loginid}=req.body;

    if(!sellerreport)
    {
        return res.json({message:" empty fields !!!"})
    }
    if(!loginid)
    {
        return res.status(400).json({message:"Seller Login required"})
    }

    const newReport=new sellerReportModel({sellerreport})
    await newReport.save()
    res.json({message:"Report Submitted successfully!!! "})
})

router.post("/addbyuser",async(req,res)=>{
    const {userreport,loginid}=req.body;

    if(!userreport)
    {
        return res.json({message:" empty fields !!!"})
    }
    if(!loginid)
    {
        return res.status(400).json({message:"User Login required"})
    }

    const newReport=new userReportModel({userreport})
    await newReport.save()
    res.json({message:"Report Submitted successfully!!! "})
})

router.get("/getuserreport",async(req,res)=>{
    try{
    const userReports= await userReportModel.find({})
    return res.status(200).send(userReports)
    }
    catch(error)
    {
        return res.status(400).json({message:"Error Occured"})
    }
})

router.get("/getuserreport/:id",async(req,res)=>{
    try{
        const {id}=req.params
        const userReport = await userReportModel.findOne({ _id: id });
        return res.status(200).send(userReport)
    }
    catch(error)
    {
        return res.status(400).json({message:"Error Occured"})
    }
})

router.get("/getsellerreport",async(req,res)=>{
    try{
    const sellerReports= await sellerReportModel.find({})
    return res.status(200).send(sellerReports)
    }
    catch(error)
    {
        return res.status(400).json({message:"Error Occured"})
    }
})

router.get("/getsellerreport/:id",async(req,res)=>{
    try{
        const {id}=req.params
        const sellerReport = await sellerReportModel.findOne({ _id: id });
        return res.status(200).send(sellerReport)
    }
    catch(error)
    {
        return res.status(400).json({message:"Error Occured"})
    }
})

module.exports=router