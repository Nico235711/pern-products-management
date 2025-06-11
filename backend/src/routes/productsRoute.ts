import { Router } from "express";
import { createProduct } from "../handlers/products";
import { body } from "express-validator";
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

router.get("/", async (req, res) => {
  res.json("from get")
})

router.get("/:id", async (req, res) => {
  res.json("from get")
})

router.put("/:id", async (req, res) => {
  res.json("from put")
})

router.patch("/:id", async (req, res) => {
  res.json("from patch")
})

router.delete("/:id", async (req, res) => {
  res.json("from delete")
})

export default router