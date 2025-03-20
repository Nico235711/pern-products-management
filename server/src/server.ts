import express from 'express'
import morgan from 'morgan'
import productsRoutes from './routes/productsRoutes'
import { db } from './config/db'

// conección a la base de datos
export async function connectDB() {
  try {
    await db.authenticate()
    await db.sync()
    
  } catch (error) {
    throw new Error("Hubo un error al conectar a la BD")
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