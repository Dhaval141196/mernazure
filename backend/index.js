import express from "express";
import { PORT, mongoDbURL } from "./config.js";
import mongoose from "mongoose";
import bookroutes from "./routes/bookroutes.js";
import cors from "cors";
const app = express();
/*Middleware parsing req body*/
app.use(express.json());
/*Middleware parse Cors Policy*/
app.use(cors());    
app.use('/books',bookroutes);
mongoose.connect(mongoDbURL).then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
        console.log(`APP is listening to port :${PORT}`)
    })
}).catch((error) => {
    console.log(error);
});