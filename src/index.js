import express, { json } from 'express'
import dotenv, { config } from 'dotenv'
import ServerRouter from './routes/server.routes'

const app = express()
const PORT = process.env.PORT || 8000
dotenv.config({path: './.env'})

// middlewares
app.use(express.json())

// routes
app.use('/',ServerRouter)

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`)
)