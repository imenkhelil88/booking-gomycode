const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userSchema=require("../models/user")

exports.Register=async(req,res)=>{
    const {email,password}=req.body
    try {
        const found= await userSchema.findOne({email})

if (found){
    res.status(400).send("email already exist")
}
else{
    const user=new userSchema(req.body)

    const salt=10
    const hashpassword=bcrypt.hashSync(password,salt)
    user.password=hashpassword
    const exp= Date.now()+1000*60*60*7
    const payload={id:user._id,exp}
    const token =jwt.sign(payload,"hello")
       await user.save()
       res.status(200).cookie("login Authorization", token,{
        expires:new Date (exp),
        httpOnly:true
    }).send({msg:"register success",user,token,exp})

}

    } catch (error) {
       res.status(500).send(error) 
    }
}


exports.Login=async(req,res)=>{
    const {email,password}=req.body
    try {
        const user= await userSchema.findOne({email})
        if(!user){
            res.status(400).send("email does not exist")
        }
        else{
            const match=bcrypt.compareSync(password,user.password)
            if(!match){
                res.status(400).send("wrong password")
            }
            else{
                const exp= Date.now()+1000*60*60*7
                const payload={id:user._id, exp}
                const token =jwt.sign(payload,"hello")
                
                res.status(200).cookie("login Authorization", token,{
                    expires:new Date (exp),
                    httpOnly:true
                }).send({msg:"login success",user,token,exp})
            }
        }
    } catch (error) {
        res.status(500).send(error) 
    }
}
exports.Logout=(req,res)=>{
    try {
      
        res.status(200).send({msg:"user logout"})
        //  res.Cookies("logout authorized")
    } catch (error) {
        res.status(500).send(error) 
    }

}

exports.GetUser=async(req,res)=>{
    try {
        const user= await userSchema.find()
        res.status(200).send({msg:"list of users",user})
    } catch (error) {
        res.status(500).send(error)
    }
}
exports.DeleteUser=async(req,res)=>{
    try {
        await userSchema.findByIdAndDelete(req.params.id)
        res.status(200).send("user deleted")
    } catch (error) {
        res.status(500).send(error) 
    }
}
exports.EditUser=async(req,res)=>{
    try {
        const user=await userSchema.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).send({msg:"user updated", user})
    } catch (error) {
        res.status(500).send(error) 
    }
}
exports.GetOne=async(req,res)=>{
    const {name}=req.body
    try {
        const user=await userSchema.find({name})
        res.status(200).send({msg:"user found", user})
    } catch (error) {
        res.status(500).send(error)   
    }
}