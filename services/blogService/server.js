import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { connectDB } from "../authService/config/db.js";
import BlogRouter from "./routes/BlogRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/blog/", BlogRouter)
//connectDB()

const PORT = process.env.PORT || 5050
app.listen(PORT, () => {
    console.log(`Blog is running on ${PORT}`)
})