import express from "express"
import cors from "cors"



const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN
}))

//Set static folder
app.use(express.static('./client'))


// configuring, what type of date we can get and other configurations.

app.use(express.json())//json data from frontend(parse data from incoming body)
//app.use(express.urlencoded())//data from url
app.use(express.static("public"))//to store resources on server 


//Routes import 
import authRoutes from "./routes/auth.routes.js"
import activityRoutes from "./routes/activity.routes.js"
import bookingRoutes from "./routes/booking.routes.js"

app.use('/api/auth', authRoutes)
app.use('/api/activity', activityRoutes)
app.use('/api/booking', bookingRoutes)


import { handleError } from "./utils/errorHandler.js"
app.use(handleError)

export {app};
