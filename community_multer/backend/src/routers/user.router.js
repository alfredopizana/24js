import express from 'express'
import { createUser, deleteUserById, getUserById, getUsers, updateUserById } from '../usecases/user.usecase.js'
import { isAdmin, isAuth } from '../middlewares/auth.middleware.js'

const router = express.Router()

router.get('/', async (request, response) => {

    try {
        const { name, lastname, email } = request.query

        let filters = {}

        if (name)
            filters = { ...filters, name }

        if (lastname)
            filters = { ...filters, lastname }

        if (email)
            filters = { ...filters, email }

        const usersFound = await getUsers(filters)

        response.json({
            success: true,
            data: {
                users: usersFound
            }
        })

    } catch (error) {
        response
            .status(400)
            .json({
                success: false,
                message: "Error at get all"
            })
    }

})

router.get('/:id', isAuth, async (request, response) => {
    try {

        const { id } = request.params

        const userFound = await getUserById(id);

        response.json({
            success: true,
            data: {
                user: userFound
            }
        })

    } catch (error) {
        response
            .status(400)
            .json({
                success: false,
                message: "Error at get user by Id"
            })
    }
})

router.post('/', async (request, response) => {

    try {

        const newUser = request.body
        console.log(newUser)
        const userCreated = await createUser(newUser);
        if (!userCreated) throw new Error("Error at create user")
        const { password, ...userReponse } = userCreated._doc;
        response.json({
            success: true,
            data: {
                user: userReponse
            }
        })


    } catch (error) {
        response
            .status(400)
            .json({
                success: false,
                message: "Error at create user",
                extraInfo: error.message
            })
    }
})

router.patch("/:id", isAuth, async (request, response) => {
    try {

        const { id } = request.params
        const newUserData = request.body
        const userUpdated = await updateUserById(id, newUserData)

        response.json({
            success: true,
            data: {
                user: userUpdated
            }
        })

    } catch (error) {
        response
            .status(400)
            .json({
                success: false,
                message: "Error at update user",
                extraInfo: error.message
            })
    }
})

router.delete("/:id", isAuth, isAdmin, async (request, response) => {
    try {
        const { id } = request.params

        const userDeleted = await deleteUserById(id)

        response.json({
            success: true,
            data: {
                user: userDeleted
            }
        })
    } catch (error) {
        response
            .status(400)
            .json({
                success: false,
                message: "Error at delete User",
                extraInfo: error.message
            })
    }
})

export default router