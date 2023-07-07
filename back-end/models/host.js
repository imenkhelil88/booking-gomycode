const mongoose=require("mongoose")
const hostSchema=new mongoose.Schema({
    destination:{type:String,required :true},
    room:{type:Number,required: true},
    image:{type:String,required :true},
    description:{type:String,required: true},
    price:{type:Number,required: true},
    address:{type:String,required: true},
    
    
},

)
module.exports=mongoose.model("host",hostSchema)