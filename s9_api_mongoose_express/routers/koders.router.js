import express from 'express'
import { Koder } from '../models/koders.model.js'

const router = express.Router()

router.get('/', async (request, response) => {

    const allKoders = await Koder.find({})


    response.json({
        sucess: true,
        loquequieras: "Algo",
        data: {
            koders: allKoders
        }
    })
})

router.post('/', (request, response) => {
    const newKoder = request.body;

    const koderCreated = Koder.create(newKoder)

})


export default router
