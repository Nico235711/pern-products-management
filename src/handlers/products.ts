import { Request, Response } from "express"
import Product from "../models/Product.model";

const STATUS_CODE = Object.freeze({
  created: 201,
  ok: 200,
  notFound: 404,
  noContent: 204
})

export async function createProduct(req: Request, res: Response) {
  
  try {
    const product = await Product.create((req.body))
    res.status(STATUS_CODE.created).json({ data: product })
  } catch (error) {
    console.log(error);
    
  }
}

export async function getAllProducts(req: Request, res: Response) {
  
  try {
    const products = await Product.findAll({
      attributes: ["id", "name", "price", "availability"] // filtro
    })
    res.status(STATUS_CODE.ok).json({ data: products })
  } catch (error) {
    console.log(error);
    
  }
}

export async function getProductById(req: Request, res: Response) {
  
  try {
    const { id } = req.params
    const product = await Product.findByPk(id)

    if (!product) {
      res.status(STATUS_CODE.notFound).json({ error: "Producto no encontrado"})
      return
    }
    res.status(STATUS_CODE.ok).json({ data: product})
  } catch (error) {
    console.log(error);
    
  }
}

export async function updateProductById(req: Request, res: Response) {
  
  try {
    const { id } = req.params
    const product = await Product.findByPk(id)

    if (!product) {
      res.status(STATUS_CODE.notFound).json({ error: "Producto no encontrado"})
      return
    }
    product.name = req.body.name
    product.price = req.body.price
    product.availability = req.body.availability
    await product.save() // guardo los cambios en la base de datos

    res.status(STATUS_CODE.ok).json({ data: product})
  } catch (error) {
    console.log(error);
    
  }
}

export async function deleteProductById(req: Request, res: Response) {
  
  try {
    const { id } = req.params
    const product = await Product.findByPk(id)

    if (!product) {
      res.status(STATUS_CODE.notFound).json({ error: "Producto no encontrado"})
      return
    }
    await product.destroy() // elimino el producto de la base de datos

    res.status(STATUS_CODE.ok).json("Producto eliminado")
  } catch (error) {
    console.log(error);
    
  }
}