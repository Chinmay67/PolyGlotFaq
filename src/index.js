import dotenv from "dotenv"



import { app } from "./app.js";
import connectDB from "./config/db.config.js";

dotenv.config({
    path:'./.env'
})



connectDB()
.then(()=>{
    app.listen(process.env.PORT  ,()=>{
        console.log(`server is running at port ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("Mongodb connection failed ",err);
})