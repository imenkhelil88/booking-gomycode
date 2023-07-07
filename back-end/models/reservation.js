const mongoose=require("mongoose")
const reservationSchema=new mongoose.Schema({
    host: {type : mongoose.Schema.Types.ObjectID , ref:'hosts'},
    user : {type : mongoose.Schema.Types.ObjectID , ref:'users'},
    bookedTimeSlots : {
        from : {type : String} ,
        to : {type : String}
    } ,
   
    totalPrice : {type : Number}
    
    
    
},
{timestamps : true}
)
module.exports=mongoose.model("reservation",reservationSchema)