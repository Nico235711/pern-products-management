import server from "./server"

const port = process.env.DB_PORT || 4000
server.listen(port, () => {
  console.log(`REST API funcionad en http://localhost:${port}`);
  
})