import express from 'express'
import dotenv from 'dotenv'
import router from './routes/routes'
import connect from './config/connexion'
dotenv.config()


function serverConfiguration() {
    const app = express()
    const PORT = process.env.PORT || 3000
    app.use(express.json())
    app.use('/api', router)
    app.listen(PORT, () => console.log(`Server is listened on : ${PORT}`))
    return app
}

connect()
serverConfiguration()
