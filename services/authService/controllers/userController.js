import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import User from "../model/authModel.js";


export const login = async (req, res) => {
    try {
        const { email, password} = req.body;
        const user = await User.findOne({ email});

        if (!user) {
            return res.status(404).json({ message : "user not found"})
        }

        const matchPassword = await bcrypt.compare(password, user.password)

        if(!matchPassword) {
            return res.status(400).json({ message : " wrong password"})
        }

        const token = jwt.sign( {
            id: user._id}, process.env.JWT_KEY, { expiresIn: "1d"})
            
        res.status(200).json({ message: "login successful", user})  

    } catch (error) {
        res.status(500).json({ message:`${error}`})        
    }
}

export const registerUser = async (req, res) => {
    try {
       const { name, password, email} = req.body;
       const hashPassword = await bcrypt.hash(password, 10)
       const user = new User({
        name, email, password: hashPassword
       }) 

       await user.save();
       res.status(201).json({ message : " new user created"})
    } catch (error) {
        res.status(500).json({ message: `${error}`})
    }
}

