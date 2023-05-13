import bcrypt from "../libs/bcrypt.js"
import { User } from "../models/user.model.js"

const createUser = async (userData) => {

    const { password, username } = userData;

    const userFound = User.findOne({ username })

    if (userFound) throw new Error()

    const passwordHashed = await bcrypt.hash(password)

    return User.create({ ...userData, password: passwordHashed })
}

export { createUser }