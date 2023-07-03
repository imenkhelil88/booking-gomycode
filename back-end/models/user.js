const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    name:{type:String,required: true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    birthdate:{type:Date, required:true},
    image:{type:String,required :false},
    phone:{type:Number, required:true},
    role:{type:String,enum:["user","admin"],default:"user"}
})
module.exports=mongoose.model("user",userSchema)