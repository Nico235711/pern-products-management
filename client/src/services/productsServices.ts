import axios from "axios";
import { productFormSchema, productSchema, productsSchema } from "../schemas";
import { Product } from "../types";
import { toBoolean } from "../utils";

type ProductData = {
  [k: string]: FormDataEntryValue;
}

const BASE_URL = import.meta.env.VITE_BACKEND_URL

export const addProduct = async (formData: ProductData) => {
  try {
    const result = productFormSchema.safeParse({
      name: formData.name,
      price: Number(formData.price)
    })
    if (result.success) {
      await axios.post(`${BASE_URL}`, {
        name: result.data.name,
        price: result.data.price,
      })
    }
    
  } catch (error) {
    console.log(error);
    
  }
}

export const getAllProducts = async () => {
  try {
    const { data } = await axios(BASE_URL)
    const result = productsSchema.safeParse(data.data)
    if (result.success) return result.data
  } catch (error) {
    console.log(error);
    
  }
}

export const getProductById = async (id: Product["id"]) => {
  try {
    const { data } = await axios(`${BASE_URL}/${id}`)
    const result = productSchema.safeParse(data.data)
    if (result.success) return result.data
  } catch (error) {
    console.log(error);
    
  }
}

export const updateProductById = async (id: Product["id"], formData: ProductData) => {
  try {
    const result = productSchema.safeParse({
      id,
      name: formData.name,
      price: Number(formData.price),
      availability: toBoolean(formData.availability.toString()),
    })
    if (result.success) {
      await axios.put(`${BASE_URL}/${id}`, result.data)
    }
  } catch (error) {
    console.log(error);
  }
}

export const updateProductAvailability = async (id: Product["id"]) => {
  
  try {
    await axios.patch(`${BASE_URL}/${id}`)
  } catch (error) {
    console.log(error);
  }
}

export const deleteProductById = async (id: Product["id"]) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`)
  } catch (error) {
    console.log(error);
  }
}