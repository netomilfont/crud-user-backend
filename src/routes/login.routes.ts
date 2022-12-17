import { Router } from "express";
import { createLoginController } from "../controllers/login.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const loginRoutes = Router()

loginRoutes.post('', createLoginController)

export default loginRoutes