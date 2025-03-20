import { Request, Response } from 'express'
import Product from '../models/Product.model'

const STATUS_CODES = {
  created: 201,
  ok: 200,
  notFound: 404,
}

export class ProductsController {

  static createProduct = async (req: Request, res: Response) => {
    const product = await Product.create(req.body)
    res.status(STATUS_CODES.created).json({ data: product })
  }

  static getAllProducts = async (req: Request, res: Response) => {
    const products = await Product.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"]
      }
    })
    res.status(STATUS_CODES.ok).send({ data: products })
  }

  static getProductById = async (req: Request, res: Response) => {
    const { id } = req.params
    const product = await Product.findByPk(id, {
      attributes: {
        exclude: ["createdAt", "updatedAt"]
      }
    })
    if (!product) {
      const error = new Error("Producto no encontrado")
      res.status(STATUS_CODES.notFound).json({ error: error.message })
      return
    }
    res.status(STATUS_CODES.ok).json({ data: product })
  }

  static updateProductById = async (req: Request, res: Response) => {
    const { id } = req.params
    const product = await Product.findByPk(id)
    if (!product) {
      const error = new Error("Producto no encontrado")
      res.status(STATUS_CODES.notFound).json({ error: error.message })
      return
    }
    product.name = req.body.name
    product.price = req.body.price
    product.availability = req.body.availability
    await product.save()
    res.status(STATUS_CODES.ok).json({ data: product })
  }

  static updateProductAvailability = async (req: Request, res: Response) => {
    const { id } = req.params
    const product = await Product.findByPk(id)
    if (!product) {
      const error = new Error("Producto no encontrado")
      res.status(STATUS_CODES.notFound).json({ error: error.message })
      return
    }
    product.availability = !product.dataValues.availability
    await product.save()
    res.status(STATUS_CODES.ok).json({ data: product })
  }

  static deleteProductById = async (req: Request, res: Response) => {
    const { id } = req.params
    const product = await Product.findByPk(id)
    if (!product) {
      const error = new Error("Producto no encontrado")
      res.status(STATUS_CODES.notFound).json({ error: error.message })
      return
    }
    await product.destroy()
    res.status(STATUS_CODES.ok).json({ data: product })
  }
}