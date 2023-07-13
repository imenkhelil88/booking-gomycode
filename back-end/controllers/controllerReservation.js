const reservationSchema= require('../models/reservation')
exports.AddResevation=async(req,res)=>{
    try {
        const reservation=new reservationSchema(req.body)
       await reservation.save()
        res.status(200).send({msg:"reservation added",reservation})
    } catch (error) {
       res.status(500).send(error) 
    }
}
exports.GetReservation=async(req,res)=>{
    try {
        const reservation= await reservationSchema.find()
        res.status(200).send({msg:"list of reservation",reservation})
    } catch (error) {
        res.status(500).send(error)
    }
}
exports.DeleteReservation=async(req,res)=>{
    try {
        await reservationSchema.findByIdAndDelete(req.params.id)
        res.status(200).send("reservation deleted")
    } catch (error) {
        res.status(500).send(error) 
    }
}
exports.EditReservation=async(req,res)=>{
    try {
        const reservation=await reservationSchema.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).send({msg:"reservation updated", reservation})
    } catch (error) {
        res.status(500).send(error) 
    }
}
exports.Getone=async(req,res)=>{
    const {name}=req.body
    try {
        const reservation=await reservation.find({name})
        res.status(200).send({msg:"host found", reservation})
    } catch (error) {
        res.status(500).send(error)   
    }
}
// exports.ReservationRef=async (req, res) => {
//     const userId = req.params.userId;
  
//     try {
//       // Récupérer l'utilisateur avec les hôtes référencés
//       const user = await user.findById(userId).populate('hosts');
  
//       res.json(user);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Erreur lors de la récupération de l\'utilisateur.' });
//     }
//   };