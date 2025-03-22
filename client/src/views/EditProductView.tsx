import { ActionFunctionArgs, Form, LoaderFunctionArgs, redirect, useActionData, useLoaderData } from "react-router"
import { ProductForm } from "../components/ProductForm"
import { getProductById, updateProductById } from "../services/productsServices"
import { Product } from "../types"
import { toast } from "react-toastify"
import { ErrorMsg } from "../components/ErrorMsg"

const selectOptions = [
  { value: true, label: "Disponible" },
  { value: false, label: "No disponible" },
]

export async function loader({ params }: LoaderFunctionArgs) {
  if (params.id !== undefined) {
    const id = Number(params.id)
    const product = await getProductById(id)
    return product
  }
}

export async function action({ request, params}: ActionFunctionArgs) {
  const formData = Object.fromEntries(await request.formData())
  let error = ""
  if (Object.values(formData).includes("")) {
    error = "Todos los campos son obligatorios"
  }
  if (error.length > 0) return error
  if (params.id !== undefined) {
    const id = Number(params.id)
    await updateProductById(id, formData)
    toast.success("Producto actualizado")
    return redirect("/")
  }
}

export const EditProductView = () => {

  const product = useLoaderData<Product>()
  const error = useActionData<string>()

  return (
    <Form
      className="mt-10 space-y-4"
      method="POST"
    >
      {error && <ErrorMsg>{error}</ErrorMsg>}
      <ProductForm product={product} />
      <div className="space-y-4">
        <label htmlFor="availability" className="text-lg text-slate-800 block">Disponibilidad</label>
        <select
          name="availability"
          id="availability"
          className="w-full bg-slate-100 py-2 rounded"
          defaultValue={product?.availability.toString()}
        >
          <option value="" disabled>Seleccione disponibilidad</option>
          {selectOptions.map(stateOption => (
            <option
              key={stateOption.label}
              value={stateOption.value.toString()}
            >{stateOption.label}</option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="bg-slate-800 w-full py-3 text-white font-semibold text-lg mt-5 cursor-pointer hover:bg-slate-900 transition-all"
      >Guardar Cambios</button>
    </Form>
  )
}
