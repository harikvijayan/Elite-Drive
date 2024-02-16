const mongoose=require('mongoose')


const sellerSchema=new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    address:{type:String,required:true},
    phoneno:{type:Number,required:true,unique:true},
    password:{type:String,required:true},
    ban:{type:Boolean,required:true,default:false}
    
    
})

const sellerModel=mongoose.model("sellers",sellerSchema)


module.exports={sellerModel}
