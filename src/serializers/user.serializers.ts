import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserRequest, IUser } from "../interfaces/users";

const userSerializer: SchemaOf<IUserRequest> = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    isAdm: yup.boolean().required(),
    password: yup.string().required()
})

const userWithoutPasswordSerializer: SchemaOf<IUser> = yup.object().shape({
    name: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    isAdm: yup.boolean().notRequired(),
    id: yup.string().notRequired(),
    createdAt: yup.date().notRequired(),
    updatedAt: yup.date().notRequired()
})

export { userSerializer, userWithoutPasswordSerializer }