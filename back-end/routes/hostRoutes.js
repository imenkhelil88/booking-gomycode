const express=require("express")
const { AddHost, Gethost, DeleteHost, EditHost, Getone } = require("../controllers/controllerHost")
const hostRoutes=express.Router()
hostRoutes.post("/post",AddHost)
hostRoutes.get("/get",Gethost)
hostRoutes.delete("/delete/:id",DeleteHost)
hostRoutes.put("/update/:id",EditHost)
hostRoutes.post("/filter",Getone)



module.exports = hostRoutes