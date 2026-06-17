import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
	username: String,
	password: String
})

const UserModel = mongoose.Model("User",userSchema);

export UserModel
