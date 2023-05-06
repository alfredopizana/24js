import { User } from '../models/user.model.js'
import bcrypt from '../libs/bcrypt.js'

const createUser = async (userData) => {

    const { email, password } = userData

    const userFound = await User.findOne({ email })

    if (userFound) throw new Error("The user already exist")

    //Encriptar el password
    const encryptedPassword = await bcrypt.hash(password)

    return User.create({ ...userData, password: encryptedPassword })

}

const getUsers = (filters = {}) => {
    return User.find(filters).select("-password");
}

const getUserById = (id) => {
    return User.findById(id).select("-password");
}

const updateUserById = (id, userData, options = {}) => {
    return User.findByIdAndUpdate(id, userData, { new: true, ...options }).select("-password");
}

const deleteUserById = (id) => {
    return User.findByIdAndDelete(id).select("-password");
}



export {
    createUser,
    getUsers,
    getUserById,
    updateUserById,
    deleteUserById
}