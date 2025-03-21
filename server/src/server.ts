import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import productsRoutes from './routes/productsRoutes'
import { db } from './config/db'
import swaggerUiExpress from 'swagger-ui-express'
import { swaggerSpec } from './config/swagger'
import { corsOptions } from './config/cors'

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

// cors
app.use(cors(corsOptions))

// rutas
app.use("/api/products", productsRoutes)
app.use("/api/docs", swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerSpec))

export default app