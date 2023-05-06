import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
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
    email: {
        type: String,
        match: /.*@.*\..*/,
        required: true,
        trim: true,
        unique: true
    },
    profilePictureUrl: {
        type: String,
        select: false
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
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export const User = mongoose.model('users', userSchema)
