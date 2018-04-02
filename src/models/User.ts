import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
    name: String,
    age: Number,
    gender: String,
    type: String
}, {
    timestamps: true
})

export const User = model('User', UserSchema)
