import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();

export const connectDB = () => {
    try {
        const DB_url = process.env.MONGODB_URL || ""

        mongoose.connect(DB_url)
            .then(() => console.log("mongodb connected"))
            .catch(err => console.log(err))
        } catch (error) {
        console.log(error)
    }
}