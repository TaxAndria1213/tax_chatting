import mongoose, { Schema, Document } from "mongoose";

const UserSchema : Schema = new Schema({
    name: { type: String, required: true },
    firstName: { type: String, required: true },
    mail: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
})

const User = mongoose.model('User', UserSchema)

export default User


