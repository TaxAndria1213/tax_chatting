import { json } from "express"
import { create } from "../services/user"


export const getUser = (req: any, res: any) => {
    const userId = req.params
    res.send(userId)
}

export const createUser = async (req: any, res: any) => {
    try {
        const newUser = req.body
        console.log(newUser)
        const response = await create(newUser)
        res.status(201).json(response)
    } catch (error: any) {
        res.status(400).json({ message: "erreur" })
    }
}

export const logUser = async (req: any, res: any) => {
    try {
        
    } catch (error) {
        res.status(401).json({message: "e-mail ou mot de passe incorrect !"})
    }
}