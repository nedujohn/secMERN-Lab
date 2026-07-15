import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import AuthRouter from "./routes/AuthRouter.js"
import { connectDB } from "./config/db.js"

dotenv.config()

const app = express()


app.use(cors())
app.use(express.json())
app.use("/api/auth", AuthRouter)

const PORT = process.env.PORT || 5050


//connectDB();

app.listen(PORT, () => {
    console.log(`Auth server on ${PORT}`)
})