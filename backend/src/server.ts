import express from 'express';
import router from './router';
import { db } from './config/db';

// conectar a la base de datos
async function connectDB() {
  try {
    await db.authenticate();
    db.sync()
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
connectDB()

// creando el servidor
const server = express()

// usando el router
server.use("/api/products", router)

export default server