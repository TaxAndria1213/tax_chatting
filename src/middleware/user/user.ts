import bcrypt from "bcryptjs"


export const hashPassword = (req: any, res: any, next: any) => {
    try {
        const { password } = req.body
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        req.hash = hash
        next()
    } catch (error) {
        console.error(error);

    }
}

export const verifyUser = (req: any, res:any, next: any) => {
    
}