import express from "express";
import { RegisterUser } from "../Functions/User/RegisterUser.js";
import { LoginUser } from "../Functions/User/LoginUser.js";
import { AuthMiddleware } from "../Middleware/AuthMiddleware.js";
import { Hello } from "../Functions/User/Hello.js";

const route = express.Router()

route.post('/Cadastro', RegisterUser)
route.post('/Login', LoginUser)
route.get('/Profile', AuthMiddleware, Hello)

export default route