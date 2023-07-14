const express=require("express")
const user = require("../models/user")
const { isAuth } = require("../middleware/isAuth")
const { GetUser, DeleteUser, EditUser, GetOne, Register, Login, Logout, GetProfile } = require("../controllers/controllerUser")
const { registervalidation, validation, loginvalidation } = require("../middleware/validator")
const userRoutes=express.Router()



userRoutes.post("/register",registervalidation,validation,Register)
userRoutes.post("/login",loginvalidation,validation,Login)
userRoutes.get("/logout",Logout)
userRoutes.get("/current",isAuth)
userRoutes.get("/",GetUser)
userRoutes.delete("/:id",DeleteUser)
userRoutes.put("/update/:id",EditUser)
userRoutes.post("/filter",GetOne)
userRoutes.get("/profile/:id",GetProfile)

module.exports=userRoutes