import express from "express"
import { login, registerUser, testApi } from "../controllers/userController.js"

const AuthRouter = express.Router()

AuthRouter.get("/", testApi);
AuthRouter.post("/register", registerUser)
AuthRouter.post("/login", login)

export default AuthRouter