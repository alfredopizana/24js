import jwt from '../libs/jwt.js'
import { getKoderById } from '../usecases/koder.usecase.js'

const isAuth = (request, response, next) => {

    try {
        /**
         * Estructura:
         * 
         * Authorization: "Bearer a12123213aqw"
         * 
         */
        //Obtener token

        const authorization = request.headers.authorization || ""

        const token = authorization.replace('Bearer ', '')  // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDFmNGJjMmM2ODE3M2E0NTFhMjRmYiIsInNhbHVkbyI6IkhvbGEgZGFtYXJpcyIsImlhdCI6MTY4MjA0OTk2MCwiZXhwIjoxNjgyMTM2MzYwfQ.9Y5nChoUhFm6SI1RXA3E-bK0AGmJ5TVmpCP7M_-DUVA

        //Verificar el token

        const isValidToken = jwt.verify(token);

        //Si todo sale bien, llamar next
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

        const koderId = tokenPayload.id

        const koderFound = await getKoderById(koderId)

        if (!koderFound) throw new Error('Invalid authorization')

        const { role = "user" } = koderFound;
        console.log(`The user with id ${koderId} has a role ${role}`)

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