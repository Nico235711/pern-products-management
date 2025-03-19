import { Router } from "express";
import { ProductsController } from "../controllers/products";

const router = Router()

router.post("/", ProductsController.createProduct)

router.get("/", ProductsController.getAllProducts)

router.get("/:id", ProductsController.getProductById)

router.put("/:id", ProductsController.updateProductById)

router.delete("/:id", ProductsController.deleteProductById)

export default router