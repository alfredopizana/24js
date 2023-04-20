import express from 'express'
import { getKoders } from '../usecases/koder.usecase.js'


const router = express.Router()

router.get('/', async (request, response) => {

    try {
        const { age, generation, gender, name, lastname, isGraduated } = request.query

        let filters = {}

        if (age)
            filters = { ...filters, age }

        if (generation)
            filters = { ...filters, generation }

        if (gender)
            filters = { ...filters, gender }

        if (name)
            filters = { ...filters, name }

        if (lastname)
            filters = { ...filters, lastname }

        if (isGraduated)
            filters = { ...filters, isGraduated }

        const kodersFound = await getKoders(filters)

        response.json({
            success: true,
            data: {
                koders: kodersFound
            }
        })

    } catch (error) {
        response
            .status(400)
            .json({
                success: false,
                message: "Error at get All Koders"
            })
    }

})

export default router