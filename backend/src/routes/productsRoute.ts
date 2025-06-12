import { Router } from "express";
import { createProduct, getAllProducts, getProductById, updateProductById } from "../handlers/products";
import { body, param } from "express-validator";
import { handleInputErrors } from "../middleware/validation";

const router = Router()

router.post("/", 
  body("name").notEmpty().withMessage("El nombre del producto es obligatorio"),
  body("price")
    .notEmpty().withMessage("El nombre del producto es obligatorio")
    .isNumeric().withMessage("Valor no válido")
    .custom(value => value > 0).withMessage("El precio del producto debe ser mayor a cero"),
  handleInputErrors,
  createProduct
)

router.get("/", getAllProducts)

router.get("/:id", 
  param("id").isNumeric().withMessage("ID no válido"),
  handleInputErrors,
  getProductById
)

router.put("/:id",
  param("id").isNumeric().withMessage("ID no válido"),
  body("name").notEmpty().withMessage("El nombre del producto es obligatorio"),
  body("price")
    .notEmpty().withMessage("El nombre del producto es obligatorio")
    .isNumeric().withMessage("Valor no válido")
    .custom(value => value > 0).withMessage("El precio del producto debe ser mayor a cero"),
  body("availability")
    .notEmpty().withMessage("La disponibilidad es obligatoria"),
    handleInputErrors,
  updateProductById
)

router.patch("/:id", async (req, res) => {
  res.json("from patch")
})

router.delete("/:id", async (req, res) => {
  res.json("from delete")
})

export default router