const mongoose=require('mongoose')


const reportSchema=new mongoose.Schema({
    report:{type:String,required:true},
    loginid:{type:mongoose.Schema.Types.ObjectId,ref:"sellers",required:true},
    seen:{type:Boolean,required:true,default:false}
    
})

const reportModel=mongoose.model("reports",reportSchema)

module.exports={reportModel}