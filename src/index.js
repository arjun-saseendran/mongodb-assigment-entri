import express from 'express'
import dotenv, { config } from 'dotenv'

const app = express()
const PORT = process.env.PORT || 8000
dotenv.config({path: './.env'})

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`)
)