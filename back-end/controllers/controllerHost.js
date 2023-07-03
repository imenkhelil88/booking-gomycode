const hostSchema= require('../models/host')
exports.AddHost=async(req,res)=>{
    try {
        const host=new hostSchema(req.body)
       await host.save()
        res.status(200).send({msg:"host added",host})
    } catch (error) {
       res.status(500).send(error) 
    }
}
exports.Gethost=async(req,res)=>{
    try {
        const host= await hostSchema.find()
        res.status(200).send({msg:"list of host",host})
    } catch (error) {
        res.status(500).send(error)
    }
}
exports.DeleteHost=async(req,res)=>{
    try {
        await hostSchema.findByIdAndDelete(req.params.id)
        res.status(200).send("host deleted")
    } catch (error) {
        res.status(500).send(error) 
    }
}
exports.EditHost=async(req,res)=>{
    try {
        const host=await hostSchema.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).send({msg:"host updated", host})
    } catch (error) {
        res.status(500).send(error) 
    }
}
exports.Getone=async(req,res)=>{
    const {destination}=req.body
    try {
        const host=await hostSchema.find({destination})
        res.status(200).send({msg:"host found", host})
    } catch (error) {
        res.status(500).send(error)   
    }
}