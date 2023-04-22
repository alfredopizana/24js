import express from 'express'
import { login } from '../usecases/auth.usecase.js'


const router = express.Router()



router.post('/login', async (request, response) => {
    try {

        const { email, password } = request.body

        const token = await login(email, password);

        response.json({
            success: true,
            message: "Koder logged in",
            data: {
                token
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