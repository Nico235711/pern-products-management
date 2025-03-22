import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline"
import { Product } from "../types"
import { formatCurrency } from "../utils"
import { ActionFunctionArgs, Form, redirect, useFetcher, useNavigate } from "react-router"
import { deleteProductById } from "../services/productsServices"
import { toast } from "react-toastify"

type ProductsDetailsProps = {
  product: Product
}

export async function action({ params }: ActionFunctionArgs) {  
  if (params.id !== undefined) {
    const id = Number(params.id)
    await deleteProductById(id)
    toast.error("Producto eliminado")
    return redirect("/")
  }
}

export const ProductsDetails = ({ product }: ProductsDetailsProps) => {
  
  const navigate = useNavigate()
  const fetcher = useFetcher()
  const { availability, id, name, price } = product
  const available = availability

  return (
    <div className="flex justify-between border-b-2 border-b-slate-200 mt-5 last-of-type:border-0">
      <div className="space-y-2">
        <h3 className="text-xl text-slate-800 font-semibold">{name}</h3>
        <p className="text-lg text-slate-500">{formatCurrency(price)}</p>
        <fetcher.Form
          method="POST"
        >
          <button
            type="submit"
            name="id"
            value={id}
            className={`${available ? "text-green-500" : "text-red-500"} border-2 border-slate-200 rounded py-1 px-4 cursor-pointer text-lg font-semibold capitalize`}
          >
            {available ? "Disponible" : "No disponible"}
          </button>
        </fetcher.Form>
      </div>
      <div className="flex gap-2 items-start">
        <button
          type="button"
          className="border-2 border-green-500 rounded py-1 px-2 cursor-pointer"
          onClick={() => navigate(`/products/edit/${id}`)}
        >
          <PencilIcon
            height={24}
            width={24} 
          />
        </button>
        <Form
          method="POST"
          action={`products/delete/${id}`}
        >
          <button type="submit" className="border-2 border-red-500 rounded py-1 px-2 cursor-pointer">
            <TrashIcon 
              height={24}
              width={24} 
            />
          </button>
        </Form>
      </div>
    </div>
  )
}
