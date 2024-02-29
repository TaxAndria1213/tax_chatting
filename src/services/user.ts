import { hashPassword } from "../middleware/user/user"
import User from "../models/user"
import express from "express"
const app = express()



/**
 * userData example
 * @param userData = {
    "name": "value",
    "firstName": "value",
    "mail": "value",
    "password": "value"
}
 */
export const create = async (userData: any) => {
    try {
        const { name, firstName, mail, password } = userData

        const newUser = new User({
            name: name,
            firstName: firstName,
            mail: mail,
            password: password
        })
        const savedUser = await newUser.save()

        return savedUser

    } catch (error) {
        throw console.log(error);
    }

}

export const getUser = async (userData: any) => {
    try {
        const { mail, password } = userData
        const logUser = User.findOne({
            mail: mail
        })
        return logUser

    } catch (error) {
        throw console.log(error);

    }
}