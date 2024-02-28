import express from 'express'
import { getUser, createUser, logUser } from '../controllers/user'
const userRouter = express.Router()

userRouter.get('/:id', getUser)
userRouter.post('/', createUser)
userRouter.get('/login', logUser)

export default userRouter