import { z } from "zod";

export const productFormSchema = z.object({
  name: z.string(),
  price: z.number()
})

export const productSchema = z.object({
  name: z.string(),
  price: z.number(),
  id: z.number(),
  availability: z.boolean()
})
export const productsSchema = z.array(productSchema)