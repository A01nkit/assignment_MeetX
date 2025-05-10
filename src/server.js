import dotenv from "dotenv"
import connectDB from "./config/db.config.js";
import {app} from "./app.js"

dotenv.config({
    path: './.env'
})

connectDB()
.then(() => {
    //we are listening error for an event. i.e; listening after db connection and before server listening
    app.on("error", (error) => {
        console.log("ERROR: ", error);
        throw error;  
    })
    app.listen(process.env.PORT || 9000, () => {
        console.log(`Server is running at port: ${process.env.PORT}`);
    })
    app.on("error", (error) => {
        console.log('your port is not free')
    })
})
.catch((err) => {+
    console.log("MONGO db connection failed !!!" , err);
})