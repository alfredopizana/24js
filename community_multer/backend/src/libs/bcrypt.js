import bcrypt, { compareSync } from 'bcrypt'

const saltRounds = 10;

const hash = (plainText) => {
    return bcrypt.hash(plainText, saltRounds)
}

export default {
    ...bcrypt,
    hash
}