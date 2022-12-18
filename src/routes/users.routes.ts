import { Router } from "express";
import { createUserController, deleteUserController, listUsersController, updateUserController } from "../controllers/users.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureUserIsAdm from "../middlewares/ensureUserIsAdm.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { userSerializer, userUpdateSerializer, userWithoutPasswordSerializer } from "../serializers/user.serializers";

const userRoutes = Router()

userRoutes.post('', ensureDataIsValidMiddleware(userSerializer), createUserController)
userRoutes.get('', ensureAuthMiddleware, ensureUserIsAdm, listUsersController)
userRoutes.patch('/:id', ensureAuthMiddleware, ensureDataIsValidMiddleware(userUpdateSerializer), updateUserController)
userRoutes.delete('/:id', ensureAuthMiddleware, ensureUserIsAdm, deleteUserController)

export default userRoutes