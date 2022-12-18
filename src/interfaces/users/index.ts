export interface IUserRequest {
    name: string
    email: string
    password: string
    isAdm: boolean
}

export interface IUser {
    id: string | undefined
    name: string | undefined
    email: string | undefined
    isAdm: boolean | undefined
    isActive:boolean | undefined
    createdAt: Date | undefined
    updatedAt: Date | undefined
}


export interface IUserLogin {
    email: string
    password: string
}

export interface IUserUpdate {
    name?: string
    email?: string
    password?: string
}