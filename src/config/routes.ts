import { json } from 'express'
import { userRouter } from '../controllers/users.controller'

export function initRoutes(app: any) {
    app.use(json())
    app.use('/api/users', userRouter)
}