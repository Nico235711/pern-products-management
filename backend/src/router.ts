import { Router } from 'express'
import { createProduct, getProducts } from './handlers/product'
import { body } from 'express-validator'
import { handleInputErrors } from './middleware/handleInputErrors'

const router = Router()

// routing
router.post("/", 
  body("name")
    .notEmpty().withMessage("El nombre del producto no puede ir vacío"),
  body("price")
    .notEmpty().withMessage("El precio no puede ir vacío")
    .isNumeric().withMessage("El precio debe ser número")
    .custom(value => value > 0).withMessage("Precio no válido"),
  handleInputErrors,
  createProduct
)

router.get("/", getProducts)

export default router