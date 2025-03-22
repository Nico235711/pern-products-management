import { z } from "zod";
import { productSchema, productsSchema } from "../schemas";

export type Product = z.infer<typeof productSchema>
export type Products = z.infer<typeof productsSchema>