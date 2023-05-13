import express from "express"
import userRouter from "./routers/user.router.js"

const server = express()

//Middlewares de applicacion
server.use(express.json())

//Rutas
server.use("/users", userRouter)




export { server }