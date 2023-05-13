import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        index: true,
        unique: true,

    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    isActive: {
        type: Boolean,
        default: true
    },
    firstName: {
        type: String,
        minLength: 2,
        maxLenth: 50
    },
    lastName: {
        type: String,
        minLength: 2,
        maxLenth: 50
    }
})

export const User = mongoose.model("users", userSchema)
