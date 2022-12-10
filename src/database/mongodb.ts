import { connect, mongo, set } from 'mongoose'
import * as dotenv from 'dotenv'

dotenv.config()

export function connectDB() {
    set('strictQuery', false)

    const mongodbUrl = process.env.MONGODB_URL

    try {
        connect(`${mongodbUrl}`).then(() => { console.log('Conectado ao MongoDB!') })
    } catch (error) {
        console.log(error)
    }
    
}