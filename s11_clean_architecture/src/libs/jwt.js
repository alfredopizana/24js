import jwt from 'jsonwebtoken'

const { JWT_SECRET } = process.env

const sign = (payload) => {

    // La carga / 
    return jwt.sign({ ...payload }, JWT_SECRET, {
        expiresIn: "1d"
    })
}
const verify = (token) => {
    return jwt.verify(token, JWT_SECRET)
}

export default {
    ...jwt,
    sign,
    verify
}