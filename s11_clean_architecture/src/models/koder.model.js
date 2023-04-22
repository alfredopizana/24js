import mongoose, { Schema } from "mongoose";

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
        minLength: 2,
        maxLength: 100,
        trim: true,
        required: true
    },
    age: {
        type: Number,
        min: 1,
        max: 100
    },
    gender: {
        type: String,
        enum: ['m', 'h', 'o'], // Que valores son validos para este campo
    },
    isGraduated: {
        type: Boolean,
        default: false
    },
    email: {
        type: String, //Regex
        match: /.*@.*\..*/,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },

})

const Koder = mongoose.model('koders', koderSchema)


export { Koder } // Esto es un objeto