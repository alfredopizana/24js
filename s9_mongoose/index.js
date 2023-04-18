import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()


// const DB_USER = 'tuuser'
// const DB_PASSWORD = 'unvalor'
// const DB_HOST = 'unvalor'
// const DB_NAME = 'valor'

// console.log('PROCESS DB_USER: ', process.env.DB_USER)
// console.log('PROCESS DB_PASSWORD: ', process.env.DB_PASSWORD)
// console.log('PROCESS DB_HOST: ', process.env.DB_HOST)
// console.log('PROCESS DB_NAME: ', process.env.DB_NAME)

// const DB_USER = process.env.DB_USER
// const DB_PASSWORD = process.env.DB_PASSWORD
// const DB_HOST = process.env.DB_HOST
// const DB_NAME = process.env.DB_NAME


const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env
// console.log(process.env)

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`

/**
 * Modelos - Interfaz para comunicarnos con la BD - Termino de mongoose
 * - Crear
 * - Actualizar
 * - Editar
 * - Eliminar
 * 
 * Para poder crear un modelo necesitar un Schema
 * 
   Schema - Nos permitira definir la estructura de los documento

        Que contiene un schema:
            - Que campos (name, lastname, age, etc..)
            - Validacion (requerido, default, minLength)
            - Restricciones 

    Modelos hace referencia a la coleccion        

    process.argv 

    process.env
 */


//Schema Koders

const koderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100,
        trim: true
    },
    age: {
        type: Number,
        min: 1,
        max: 100,
        required: true
    },
    gender: {
        type: String,
        enum: ['m', 'h'], // El enum en el schema nos permite definir que valores son validos 
        required: true
    },
    idGraduated: {
        type: Boolean,
        default: false,
    }

})


//Al crear un modelo de mongoose - Por convencion la primera es mayuscula
// El modelo hace referencia a la coleccion
const Koder = mongoose.model('koders', koderSchema)




mongoose.connect(URL)
    .then(async (connection) => {
        console.log('Database Connected')

        // const allKoders = await Koder.find({})
        // console.log(allKoders)

        // const newKoder = {
        //     name: 'Rodolfo',
        //     lastName: 'Perez',
        //     age: '23',
        //     gender: 'h'
        // }

        // const koderCreated = await Koder.create(newKoder)
        // console.log(koderCreated)


        // .findByAndUpdate
        // const newData = {
        //     name: 'Rodolfo24JS',
        //     age: 99
        // }

        // const koderUpdated = await Koder.findByIdAndUpdate('643dffe85861205bb3edf87a', newData, { new: true })
        // console.log(koderUpdated)

        // const koderDeleted = await Koder.findByIdAndDelete('643dffe85861205bb3edf87a')
        // console.log(koderDeleted)

    })
    .catch((error) => {
        console.log("Error: ", error)
    })



    // Variables de entorno