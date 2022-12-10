import { Request, Response, Router } from 'express'
import { UserModel } from '../model/user.model'

export const userRouter = Router()

userRouter.post('/', async (req: Request, res: Response) => {
    const currentUser = { ...req.body }

    try {
        const saveUser = await UserModel.create(currentUser)
        
        return res.status(200).send({saveUser})
    } catch (error) {
        return console.log(error)
    }

})