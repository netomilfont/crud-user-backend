import { Request, Response, NextFunction } from "express";
import { AnySchema } from "yup";
import { AppError } from "../errors/AppError";

const ensureDataIsValidMiddleware = (schema: AnySchema) => async (req: Request, res: Response, next: NextFunction) => {

    try {
        const validatedData = await schema.validate(req.body, {
            abortEarly: false,
            stripUnknown: true
        })
        req.body = validatedData
        return next()
        
    } catch (error: any) {
        return res.status(400).send({
            message: error.message
        })
    }
}

export default ensureDataIsValidMiddleware