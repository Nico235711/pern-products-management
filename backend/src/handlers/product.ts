import { Request, Response } from "express"
import Product from "../models/Products.model"

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.create(req.body)
    res.json({ data: product })

  } catch (error) {
    console.log(error);

  }
}

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.findAll({
      // omitiendo campos
      attributes: {
        exclude: ["updatedAt", "createdAt"]
      }
    })
    res.json({ data: products })

  } catch (error) {
    console.log(error);

  }
}