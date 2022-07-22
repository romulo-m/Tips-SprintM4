import express from 'express'
import controller from '../controllers/controller.js'

const app = express()

app.use(express.json())

controller(app)

export default app