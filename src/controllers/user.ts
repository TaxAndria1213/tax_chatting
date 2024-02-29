import { json } from "express"
import { create, getUser } from "../services/user"
import bcrypt from "bcryptjs"


export const createUser: any = async (req: any, res: any) => {
    try {
        const newUser = req.body
        newUser.password = req.hash
        const response = await create(newUser)
        res.status(201)
            .header("Content-Type", "application/json")
            .json(response)
    } catch (error: any) {
        res.status(400).json({ message: "erreur" })
    }
}

export const logUser: any = async (req: any, res: any) => {
    try {
        const userData = req.body
        const loginUser = await getUser(userData)
        if (loginUser === null) {
            throw Error
        }
        const hash: any = loginUser!.password
        const isTrueUser = bcrypt.compareSync(userData.password, hash)
        if (isTrueUser) {
            res.status(200)
                .header("Content-Type", "application/json")
                .json({ message: "Authentification réussite" })
        }
        else {
            throw Error
        }

    } catch (error) {
        res.status(401).json({ message: "e-mail ou mot de passe incorrect !" })
    }
}