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

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.findAll()
    res.status(200).json({ data: products })
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Hubo un error" })
  }
}

export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const product = await Product.findByPk(id)
    if (!product) {
      const error = new Error("Producto no encontrado")
      res.status(404).json({ error: error.message })
      return
    }
    res.status(200).json({ data: product })
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Hubo un error" })
  }
}

export const updateProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const product = await Product.findByPk(id)
    if (!product) {
      const error = new Error("Producto no encontrado")
      res.status(404).json({ error: error.message })
      return
    }
    product.name = req.body.name
    product.price = req.body.price
    product.availability = req.body.availability
    await product.save()
    res.status(200).json({ data: product })
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Hubo un error" })
  }
}

export const deleteProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const product = await Product.findByPk(id)
    if (!product) {
      const error = new Error("Producto no encontrado")
      res.status(404).json({ error: error.message })
      return
    }
    res.status(200).json({ data: product })
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Hubo un error" })
  }
}