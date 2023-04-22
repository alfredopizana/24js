import { Koder } from '../models/koder.model.js'
import bcrypt from '../libs/bcrypt.js'
// Use Cases = Handlers

const createKoder = async (koderData) => {


    const { email, password } = koderData

    const koderFound = await Koder.findOne({ email })

    if (koderFound) throw new Error("The koder already exist")

    //Encriptar el password
    const encryptedPassword = await bcrypt.hash(password)

    //Retornamos una promesa de tipo createKoder 
    return Koder.create({ ...koderData, password: encryptedPassword })

}

const getKoders = (filters = {}) => {
    return Koder.find(filters)
}

const getKoderById = (id) => {
    return Koder.findById(id)
}

const updateKoderById = (id, koderData, options = {}) => {
    return Koder.findByIdAndUpdate(id, koderData, { new: true, ...options })
}

const deleteKoderById = (id) => {
    return Koder.findByIdAndDelete(id)
}



export {
    createKoder,
    getKoders,
    getKoderById,
    updateKoderById,
    deleteKoderById
}