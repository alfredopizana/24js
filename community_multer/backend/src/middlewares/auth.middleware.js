import jwt from '../libs/jwt.js'
import { getUserById } from '../usecases/user.usecase.js'

const isAuth = (request, response, next) => {

    try {
        const authorization = request.headers.authorization || ""
        console.log(authorization)
        const token = authorization.replace('Bearer ', '')
        const isValidToken = jwt.verify(token);
        if (!isValidToken) throw new Error('Unauthorized')
        next()

    } catch (error) {
        response
            .status(401) // Unauthorized
            .json({
                sucess: false,
                message: error.message
            })
    }

}

const isAdmin = async (request, response, next) => {
    try {

        const authorization = request.headers.authorization || ''

        const token = authorization.replace('Bearer ', '')

        const tokenPayload = jwt.verify(token)

        if (!tokenPayload) throw new Error('Invalid authorization')

        const userId = tokenPayload.id

        const userFound = await getUserById(userId)

        if (!userFound) throw new Error('Invalid authorization')

        const { role = "user" } = userFound;
        console.log(`The user with id ${userId} has a role ${role}`)

        if (role === "admin") {
            next()
        }
        else {
            response
                .status(401)
                .json({
                    success: false,
                    message: "Unauthorized"
                })
        }

    } catch (error) {
        response
            .status(401)
            .json({
                success: false,
                message: error.message
            })
    }
}


export { isAuth, isAdmin }