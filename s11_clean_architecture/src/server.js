/**
 * Server:
 * Este archivo guaradara la definicion del server
 *      - Que middlewares se van a usar - montar middlewares
 *      - Montar los routers
 */

import express from 'express'
import cors from 'cors'
import koderRouter from './routers/koder.router.js'
import authRouter from './routers/auth.router.js'
const server = express() // Crear el server

// Middlewares
server.use(cors()) // Va a permitir que su frontend haga peticiones al backend
server.use(express.json())

// Routers
server.use('/koders', koderRouter)
server.use('/auth', authRouter)


export { server }