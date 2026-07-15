import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();

export const connectDB = async () => {
    try {
        const DB_url = process.env.MONGODB_URL || ""

       await mongoose.connect(DB_url)
            .then(() => console.log("mongodb connected"))
            .catch(err => console.log(err))
        } catch (error) {
        console.log(error)
    }
}