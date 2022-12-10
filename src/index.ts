import express from 'express'
import cors from 'cors'

import { connectDB } from './database/mongodb'
import { initRoutes } from './config/routes'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

connectDB()
initRoutes(app)

app.listen(5000, () => { console.log('Backend sendo executado na porta 5000') })