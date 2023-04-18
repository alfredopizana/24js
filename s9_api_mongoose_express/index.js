import mongoose from "mongoose";
import express from "express";
import * as dotenv from 'dotenv';
import kodersRouter from "./routers/koders.router.js"

dotenv.config()


const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST, SERVER_PORT } = process.env

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`
//Crear el server
const server = express()

//Middlewares 
server.use(express.json()) // Convierte(Parsea) el request a un JSON // Similar a lo que haciamos con JSON.parse() 

//Routers
server.use('/koders', kodersRouter)


mongoose.connect(URL)
    .then((connection) => {
        console.log("Database Connected")

        server.listen(SERVER_PORT, () => {
            console.log(`Server listening on port ${SERVER_PORT}`)
        })

    })
    .catch((error) => {
        console.log("Error: ", error)
    })

