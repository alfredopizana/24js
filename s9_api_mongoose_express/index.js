import mongoose from "mongoose";
import express from "express";
import * as dotenv from 'dotenv';
//import kodersRouter from "./routers/koders.router.js"
import { Koder } from "./models/koders.model.js";
import { CustomError } from "./errorCustom.js";


dotenv.config()


const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST, SERVER_PORT } = process.env

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`
//Crear el server
const server = express()

//Middlewares 
server.use(express.json()) // Convierte(Parsea) el request a un JSON // Similar a lo que haciamos con JSON.parse() 

//Routers
server.get('/koders', async (request, response) => {

    try {
        //Koder es el modelo (interfaz) que nos va a permitir conectarnos a la base de datos
        const allKoders = await Koder.find({})

        if (!allKoders)
            throw new CustomError("Koders no encontrados! Server nor funciona", 404)

        response.json({
            success: true,
            data: {
                koders: allKoders
            }
        })
    } catch (error) {

        /*
            error : {
                message: "",
                status: 4XX
            }
        */

        response
            .status(error.status)
            .json({
                success: false,
                message: error.message
            })
    }

})


//server.use('/koders', (request, response, next) => { }, kodersRouter)


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

