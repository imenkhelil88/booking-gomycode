const express = require('express')
const connectDb = require('./config/connectDb')
const userRoutes = require('./routes/userRoutes')
const hostRoutes = require('./routes/hostRoutes')
const reservationRoutes = require('./routes/reservationRoutes')
const { mailRouter } = require('./routes/mailRoutes')
const app= express()
const port=7000
app.use(express.json())

connectDb()
app.use("/api/user",userRoutes)
app.use("/api/host",hostRoutes)
app.use("/api/reservation",reservationRoutes)
app.use("/",mailRouter)
app.listen(port,console.log(`app is running on port ${port}`))