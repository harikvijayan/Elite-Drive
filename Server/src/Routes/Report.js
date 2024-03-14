const express=require("express")
const router=express.Router()
const {userReportModel,sellerReportModel} =require('../Models/Report.js')

router.post("/addbyseller",async(req,res)=>{
    const {sellerreport,loginid,email}=req.body;

    if(!sellerreport)
    {
        return res.json({message:" empty field !!!"})
    }
    if(!loginid)
    {
        return res.status(400).json({message:"Seller Login required"})
    }
    if(!email)
    {
        return res.status(400).json({message:"Seller Login required"})
    }

    const newReport=new sellerReportModel({sellerreport,loginid,email})
    await newReport.save()
    res.json({message:"Report Submitted successfully!!! "})
})

router.post("/addbyuser",async(req,res)=>{
    try
    {
    const {userreport,loginid,email}=req.body;

    if(!userreport)
    {
        return res.json({message:" empty fields !!!"})
    }
    if(!loginid)
    {
        return res.status(400).json({message:"User Login required"})
    }
    if(!email)
    {
        return res.status(400).json({message:"Email  required"})
    }

    const newReport=new userReportModel({userreport,loginid,email})
    await newReport.save()
    res.json({message:"Report Submitted successfully!!! "})
    }
    catch(error)
    {
        return res.status(400).json(error)
    }
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
        const userReport = await userReportModel.findOne({ loginid: id });
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
        const sellerReport = await sellerReportModel.findOne({ loginid: id });
        return res.status(200).send(sellerReport)
    }
    catch(error)
    {
        return res.status(400).json({message:"Error Occured"})
    }
})


router.put('/seensellerreport/:id',async(req,res)=>{
    try {
        const { id } = req.params;
        const { seen } = req.body;
        const data = await sellerReportModel.findByIdAndUpdate(id, { seen });
        if (seen === true) {
          return res.status(200).json({ message: "Report Marked as Read", data });
        } else {
          return res.status(200).json({ message: "Report Marked as UnRead ", data });
        }
      } catch (error) {
        return res.status(200).json({message:"Report Operation Not Available"});
      }
})

router.put('/seenuserreport/:id',async(req,res)=>{
    try {
        const { id } = req.params;
        const { seen } = req.body;
        const data = await userReportModel.findByIdAndUpdate(id, { seen });
        if (seen === true) {
          return res.status(200).json({ message: "Report Marked as Read", data });
        } else {
          return res.status(200).json({ message: "Report Marked as UnRead ", data });
        }
      } catch (error) {
        return res.status(200).json({message:"Report Operation Not Available"});
      }
})

router.delete("/deluserreport/:id",async(req,res)=>{
    try{
        const {id}=req.params
        await userReportModel.findByIdAndDelete(id);
        return res.status(200).json({message:"Report Deleted Successfully"})
    }
    catch(error)
    {
        return res.status(400).json({message:"Error Deleting Report"})
    }
})

router.delete("/delsellerreport/:id",async(req,res)=>{
    try{
        const {id}=req.params
        await sellerReportModel.findByIdAndDelete(id);
        return res.status(200).json({message:"Report deleted Successfully.."})
    }
    catch(error)
    {
        return res.status(400).json({message:"Error Deleting Report"})
    }
})

module.exports=router