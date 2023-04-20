/**
 * Server:
 * Este archivo guaradara la definicion del server
 *      - Que middlewares se van a usar - montar middlewares
 *      - Montar los routers
 */

import express from 'express'
import koderRouter from './routers/koder.router.js'
const server = express() // Crear el server

// Middlewares
server.use(express.json())

// Routers
server.use('/koders', koderRouter)



export { server }