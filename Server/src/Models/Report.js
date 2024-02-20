const mongoose=require('mongoose')


const userReportSchema=new mongoose.Schema({
    userreport:{type:String,required:true},
    loginid:{type:mongoose.Schema.Types.ObjectId,ref:"users",required:true},
    seen:{type:Boolean,required:true,default:false}
    
})

const sellerReportSchema=new mongoose.Schema({
    sellerreport:{type:String,required:true},
    loginid:{type:mongoose.Schema.Types.ObjectId,ref:"sellers",required:true},
    seen:{type:Boolean,required:true,default:false}
    
})

const userReportModel=mongoose.model("user reports",userReportSchema)
const sellerReportModel=mongoose.model("seller reports",sellerReportSchema)

module.exports={userReportModel,sellerReportModel}