import express from 'express'
import {  createUser, logUser } from '../controllers/user'
import { hashPassword } from '../middleware/user/user'
const userRouter = express.Router()

userRouter.post('/', hashPassword, createUser)
userRouter.post('/login' , logUser)

export default userRouter