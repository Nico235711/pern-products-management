import { Router } from "express";
import { ProductsController } from "../controllers/products";
import { body, param } from "express-validator";
import { errorHandler } from "../middleware";

const router = Router()

router.post("/", 
  body("name")
    .notEmpty().withMessage("El nombre del producto no puede ir vacío"),
  body("price")
    .isNumeric().withMessage("El precio del producto no es válido")
    .custom(value => value > 0).withMessage("El precio del producto debe ser mayor a cero"),
  errorHandler,
  ProductsController.createProduct
)

router.get("/", ProductsController.getAllProducts)

router.get("/:id", 
  param("id")
    .isNumeric().withMessage("ID no válido"),
  errorHandler,
  ProductsController.getProductById
)

router.put("/:id", 
  param("id")
    .isNumeric().withMessage("ID no válido"),
  errorHandler,
  ProductsController.updateProductById
)

router.delete("/:id", 
  param("id")
    .isNumeric().withMessage("ID no válido"),
  errorHandler,
  ProductsController.deleteProductById
)

export default router