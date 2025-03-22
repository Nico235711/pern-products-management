import { Product } from "../types"

type ProductFormProps = {
  product?: Product
}

export const ProductForm = ({ product }: ProductFormProps) => {

  return (
    <>
      <div className="space-y-4">
        <label htmlFor="name" className="block text-lg text-slate-800">Nombre del Producto</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Laptop Gamer"
          className="w-full bg-slate-100 py-2 pl-2 rounded"
          defaultValue={product?.name}
        />
      </div>
      <div className="space-y-4">
        <label htmlFor="price" className="text-lg text-slate-800 block">Precio del Producto</label>
        <input
          type="text"
          id="price"
          name="price"
          placeholder="500"
          className="w-full bg-slate-100 py-2 pl-2 rounded"
          defaultValue={product?.price}
        />
      </div>
    </>
  )
}
