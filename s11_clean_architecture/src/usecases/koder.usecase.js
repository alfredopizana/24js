import { Koder } from '../models/koder.model.js'

// Use Cases = Handlers

const createKoder = (koderData) => {
    //Retornamos una promesa de tipo createKoder 
    return Koder.create(koderData)

    //return koder desde json
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