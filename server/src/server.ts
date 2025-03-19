import express from 'express'
import morgan from 'morgan'
import productsRoutes from './routes/productsRoutes'
import { db } from './config/db'
import { styleText } from 'node:util'

// conección a la base de datos
async function connectDB() {
  try {
    await db.authenticate()
    await db.sync()
    console.log(styleText("greenBright", "Database connected"));
    
  } catch (error) {
    throw error
  }
}
connectDB()

const app = express()
// logger
app.use(morgan('dev'))

// para la lectura json
app.use(express.json())

// rutas
app.use("/api/products", productsRoutes)

export default app