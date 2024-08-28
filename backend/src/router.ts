import { Router } from 'express'
import { createProduct } from './handlers/product'

const router = Router()

// routing
router.post("/", createProduct)

router.get("/", (req, res) => {
  res.send("hola mundo")
})

export default router