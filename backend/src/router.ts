import { Router } from 'express'
import { createProduct, getProductById, getProducts } from './handlers/product'
import { body, param } from 'express-validator'
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

// obteniendo el producto por su id
router.get("/:id", 
  param("id").isInt().withMessage("ID no válido"),
  handleInputErrors,
  getProductById
)

export default router