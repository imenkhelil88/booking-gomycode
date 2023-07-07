const mongoose=require("mongoose")
const reservationSchema=new mongoose.Schema({
    host: {type : mongoose.Schema.Types.ObjectID , ref:'hosts'},
    user : {type : mongoose.Schema.Types.ObjectID , ref:'users'},
    dateDebut:{type:Date,required: true},
    dateFin:{type:Date,required: true},
   
    totalPrice : {type : Number}
    
    
    
},

)
module.exports=mongoose.model("reservation",reservationSchema)