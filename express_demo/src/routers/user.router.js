import express from "express"
import { createUser } from "../usecases/user.usecase.js"

const router = express.Router();

router.post("/", async (request, response) => {
    try {
        const userData = request.body;
        const userCreated = await createUser(userData)

        response.json({
            success: true,
            data: {
                user: userCreated
            }
        })

    } catch (error) {
        response.json({
            success: false,
            message: error.message || "Error at create user"
        })
    }

})

export default router