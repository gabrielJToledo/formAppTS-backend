import { Schema, Model, model } from 'mongoose'
import { IUser } from '../interfaces/user.interface'

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    tel: {
        type: String,
        required: true
    }
})

export const UserModel: Model<IUser> = model<IUser>('User', userSchema)