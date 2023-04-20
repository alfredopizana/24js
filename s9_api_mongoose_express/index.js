import mongoose from "mongoose";
import express from "express";
import * as dotenv from 'dotenv';
//import kodersRouter from "./routers/koders.router.js"
import { Koder, saludo } from "./models/koders.model.js";
import { CustomError } from "./errorCustom.js";
import koderRouter from "./routers/koders.router.js"
console.log(saludo)
dotenv.config()


const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST, SERVER_PORT } = process.env

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`
//Crear el server
const server = express()

//Middlewares 
server.use(express.json()) // Convierte(Parsea) el request a un JSON // Similar a lo que haciamos con JSON.parse() 

/**
 * Crear un middlware que se ejecute a nivel de aplicacion
 *  
 * Y revise si el body trae una propiedad de tipo name, entonces imprimar un saludo. ej.
 * 
 * "Hola ${kodername}, bienvenido al server"
 * 
 */

server.use((request, response, next) => {

    const { isAdmin } = request.body

    if (!isAdmin) {
        response.status(403).json({
            success: false,
            message: "Unauthorized"
        })
        return
    }
    delete request.isAdmin
    next()


    /**
     * 
     Terminar las aplicacion ya con el codigo organizado en el router koder, y el schema/Model de koder dentro de la carpeta models


     Crear un middleware que valide siempre que venga el campo isAdmin = true en el body de la petición, si no viene regresar el estatus de prohibido (403).

     Leer sobre Clean Arquitecture 
     */

})

//Routers

server.use("/koders", koderRouter)






// server.use((request, response, next) => {

//     console.log("Checando naranjas ... ")
//     request.orangeAreGood = true

//     if (request.orangeAreGood === false) {

//         response.json({
//             message: "Las naranjas no estabas buenas..."

//         })
//         return
//     }

//     next()
// })

// server.use((request, response, next) => {
//     const { orangeAreGood } = request
//     console.log("Orange are Good: ", orangeAreGood)
//     console.log("Cut oranges ...")
//     next()
// })

// server.use((request, response, next) => {
//     console.log("The juice is ready.... 💖")
//     next()
// })



// //Routers
// server.get('/koders', async (request, response) => {

//     try {

//         // const { idoloquesea, nombreDeLaAsignatura } = request.params
//         // console.log({ idoloquesea, nombreDeLaAsignatura })

//         // const { location } = request.query
//         // console.log(location)


//         //Koder es el modelo (interfaz) que nos va a permitir conectarnos a la base de datos
//         const allKoders = await Koder.find({})

//         if (!allKoders)
//             throw new CustomError("Koders no encontrados! Server nor funciona", 404)

//         response.json({
//             success: true,
//             data: {
//                 koders: allKoders
//             }
//         })

//     } catch (error) {
//         /*
//             error : {
//                 message: "",

//             }
//         */

//         // error.status = // undefined 
//         response
//             .status(error.status || 400)
//             .json({
//                 success: false,
//                 message: error.message
//             })
//     }

// })

// // POST - Crear
// server.post("/koders", async (request, response) => {

//     try {
//         const koderData = request.body;
//         console.log({ koderData })

//         const koderCreated = await Koder.create(koderData)
//         console.log({ koderCreated })

//         response
//             .status(201)
//             .json({
//                 sucess: true,
//                 data: {
//                     koder: koderCreated
//                 }
//             })

//     } catch (error) {
//         response
//             .status(error.status || 400)
//             .json({
//                 sucess: false,
//                 message: error.message
//             })
//     }


// })


// //PATCH Actualiza
// server.patch("/koders/:id", async (request, response) => {
//     try {
//         const { id } = request.params
//         const newData = request.body
//         delete newData.isAdmin
//         console.log({ newData })

//         //FindByIdAndUpdate    
//         const koderUpdated = await Koder.findByIdAndUpdate(id, newData, { new: true })
//         console.log(koderUpdated)
//         response.json({
//             success: true,
//             data: {
//                 koderUpdate: koderUpdated
//             }
//         })

//     } catch (error) {
//         //Error : { message, status} 
//         response
//             .status(error.status || 400)
//             .json({ sucess: false, message: error.message })
//     }
// })

// server.delete("/koders/:id", async (request, response, next) => {
//     try {
//         console.log("Ejecutando Delete...")

//         const { id } = request.params

//         const koderDeleted = await Koder.findByIdAndDelete(id)

//         if (!koderDeleted) throw new CustomError("El koder no se pudo eliminar", 404)

//         response.json({
//             success: true,
//             data: {
//                 koderDeleted: koderDeleted
//             }
//         })
//         next()

//     } catch (error) {
//         //Error : { message, status} 
//         response
//             .status(error.status || 400)
//             .json({ sucess: false, message: error.message })
//     }

// })





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

