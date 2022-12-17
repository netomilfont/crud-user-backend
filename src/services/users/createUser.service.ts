import { IUserRequest } from "../../interfaces/users"
import AppDataSource from "../../data-source"
import { User } from "../../entities/users.entity"

const createUserService = async (userData: IUserRequest): Promise<User> => {
    
    const userRepository = AppDataSource.getRepository(User)

    const user = userRepository.create(userData)
    await userRepository.save(user)

    return user
}

export { createUserService }