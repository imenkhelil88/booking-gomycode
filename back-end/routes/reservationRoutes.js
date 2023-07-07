const express=require("express")
const { AddResevation, GetReservation, DeleteReservation, EditReservation, Getone } = require("../controllers/controllerReservation")

const reservationRoutes=express.Router()
reservationRoutes.post("/post",AddResevation)
reservationRoutes.get("/get",GetReservation)
reservationRoutes.delete("/delete/:id",DeleteReservation)
reservationRoutes.put("/update/:id",EditReservation)
reservationRoutes.post("/filter",Getone)



module.exports = reservationRoutes