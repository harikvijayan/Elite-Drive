const mongoose=require('mongoose')


const productSchema=new mongoose.Schema({
    name:{type:String,required:true,unique:true},
    brand:{type:String,required:true},
    color:{type:String,required:true},
    price:{type:Number,required:true},
    photo:{type:String,required:true},
    mileage:{type:Number,required:true},
    year:{type:Number,required:true},
    fuel:{type:String,required:true},
    enginecc:{type:Number,required:true},
    owner:{type:Number,required:true},  
    loginid:{type:mongoose.Schema.Types.ObjectId,ref:"sellers",required:true}  
    
})

const productModel=mongoose.model("vehicles",productSchema)


module.exports={productModel}