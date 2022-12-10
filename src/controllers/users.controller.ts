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

userRouter.get('/', async (req: Request, res: Response) => {
    const users = await UserModel.find()

    return res.status(200).send(users)
})

userRouter.delete('/:id', async (req: Request, res: Response) => {
    const currentIdUser = { _id: req.params.id }

    const deleteUser = await UserModel.findByIdAndDelete(currentIdUser)

    return res.status(200).send('Usuário deletado!')
})

userRouter.put('/:id', async (req: Request, res: Response) => {
    const currentUser = { ...req.body }
    const currentIdUser = { _id: req.params.id }

    const updateUser = await UserModel.findByIdAndUpdate(currentIdUser, currentUser)

    return res.status(200).send('Usuário atualizado!')
})