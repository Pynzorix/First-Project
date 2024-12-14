import express, { Request, Response } from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import compression from 'compression'
const app = express()

// Init middleware
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())

// Init db

// Init Routes
app.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: 'API is running... 2' })
})

// Handle errors

export default app