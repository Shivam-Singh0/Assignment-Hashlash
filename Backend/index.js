import express from "express";
import dotenv from "dotenv"
import { pool } from "./db.js";
import router from "./routes.js";
import cors from "cors"



dotenv.config({path: './.env'})

const app = express();
app.use(express.json());
app.use(cors());



app.use('/api/favorites', router)

pool.query('Select 1').then(() => console.log("Database connected")).then(() => {
    app.listen(3000, () => console.log("Server running on port 3000"));
}).catch((err) => console.log(err));
