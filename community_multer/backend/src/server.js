import express from 'express'
import cors from 'cors'
import userRouter from './routers/user.router.js'
import authRouter from './routers/auth.router.js'
const server = express()

// Middlewares
server.use(express.json())
server.use(cors())

// Routers
server.use('/users', userRouter)
server.use('/auth', authRouter)

export { server }