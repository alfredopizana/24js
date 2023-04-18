import mongoose from "mongoose";

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
        max: 100,
        required: true
    },
    gender: {
        type: String,
        enum: ['m', 'h'], // Que valores son validos para este campo
        required: true
    },
    isGraduated: {
        type: Boolean,
        default: false
    }
})

const Koder = mongoose.model('koders', koderSchema)

export { Koder }