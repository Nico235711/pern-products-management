import express from 'express'


// creando el servidor
const server = express()

// routing
server.get("/", (req, res) => {
  res.send("hola mundo")
})

export default server