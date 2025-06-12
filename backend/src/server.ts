import express from 'express'
import morgan from 'morgan'
import productsRoute from './routes/productsRoute'
import connectDB from './config/dbConfig'

connectDB()
const app = express()

app.use(express.json())
app.use(morgan("dev"))

app.use("/api/products", productsRoute)
export default app