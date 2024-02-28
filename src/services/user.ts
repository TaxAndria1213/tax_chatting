import User from "../models/user"
import bcrypt from "bcryptjs"


function hashPassword(pass: string): string {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(pass, salt)
    return hash
}


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
            password: hashPassword(password)
        })
        const savedUser = await newUser.save()

        return savedUser

    } catch (error) {
        throw console.log(error);
    }

}

export const login = async (userData:any) => {
    try {
        const {mail, password} = userData
        const logUser = User.findOne({
            
        })

    } catch (error) {
        throw console.log(error);
        
    }
}