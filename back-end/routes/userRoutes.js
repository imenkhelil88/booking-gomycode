const express=require("express")
const user = require("../models/user")
const { isAuth } = require("../middleware/isAuth")
const { GetUser, DeleteUser, EditUser, GetOne, Register, Login } = require("../controllers/controllerUser")
const { registervalidation, validation, loginvalidation } = require("../middleware/validator")
const userRoutes=express.Router()



userRoutes.post("/register",registervalidation,validation,Register)
userRoutes.post("/login",loginvalidation,validation,Login)
userRoutes.get("/current",isAuth,(req,res)=>{
    res.send({user:req.user})
})
userRoutes.get("/",GetUser)
userRoutes.delete("/:id",DeleteUser)
userRoutes.put("/edit/:id",EditUser)
userRoutes.post("/filter",GetOne)

module.exports=userRoutes