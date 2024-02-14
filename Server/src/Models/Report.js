const mongoose=require('mongoose')


const reportSchema=new mongoose.Schema({
    report:{type:String,required:true},
    loginid:{type:mongoose.Schema.Types.ObjectId,ref:"sellers",required:true}  
    
})

const reportModel=mongoose.model("reports",reportSchema)

module.exports={reportModel}