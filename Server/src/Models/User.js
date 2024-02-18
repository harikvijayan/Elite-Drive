const mongoose=require('mongoose')


const userSchema=new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    cart : [{
        productID : {type:mongoose.Schema.Types.ObjectId,ref : "Product", required: true },
        quantity : {type:Number,required:true}
       
    }],
    intrest : [{ type:mongoose.Schema.Types.ObjectId,ref : "Product", required: true }],
    ban:{type:Boolean,required:true,default:false}
    
})

const userModel=mongoose.model("users",userSchema)


module.exports={userModel}
