import express from 'express'
import { Koder } from '../models/koders.model.js'

const router = express.Router()

router.use((request, response, next) => { // Middleware a nivel de router
    console.log("Request en koders Router")
    next()
})

const middlewareGetKoders = (request, response, next) => {
    console.log("GET /Koders -  Middleware a nivel de endpoint ")
    next()
}

//Endpoint
router.get('/', middlewareGetKoders, async (request, response) => {

    console.log("GET /koders")
    const allKoders = await Koder.find({})


    response.json({
        sucess: true,
        loquequieras: "Algo",
        data: {
            koders: allKoders
        }
    })
})


//Endpoint para agregar koders
router.post('/', (request, response) => {
    const newKoder = request.body;
    console.log("POST /koders")
    //const koderCreated = Koder.create(newKoder)
    response.json({
        sucess: true,
        loquequieras: "Algo",
        data: {
            koders: ""
        }
    })
})


export default router
