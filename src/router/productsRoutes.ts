import { Router } from "express"
import { 
  createProduct, 
  deleteProductById, 
  getAllProducts, 
  getProductById, 
  updateProductById 
} from "../handlers/products"

export const router = Router()

router.post("/", createProduct)

router.get("/", getAllProducts)

router.get("/:id", getProductById)

router.put("/:id", updateProductById)

router.delete("/:id", deleteProductById)