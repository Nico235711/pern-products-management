import { Request, Response } from 'express'
import Product from '../models/productModel'

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = new Product(req.body)
    await product.save()
    res.status(201).json("Producto creado")
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Hubo un error" })
  }
}