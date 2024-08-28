import express from 'express'
import router from './router'

// creando el servidor
const server = express()

// usando el router
server.use("/api/products", router)

export default server