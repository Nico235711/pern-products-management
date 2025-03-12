import express from 'express';
import morgan from 'morgan';
import { router as productRoutes } from './router/productsRoutes';
import { database } from './config/db';
import { styleText } from 'node:util';

async function connectDB() {
  try {
    await database.authenticate(); // conecta con la base de datos
    await database.sync(); // sincroniza los modelos con la base de datos
    console.log(styleText("cyan", "Database conneted"));
    
  } catch (error) {
    
    console.log(styleText("red", "Error connecting to the database"));
    
  }
}
connectDB();

const server = express();
server.use(morgan("dev"));
server.use(express.json())

server.use("/api/products", productRoutes);

export default server;