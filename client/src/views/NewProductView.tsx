import { ActionFunctionArgs, Form, Link, redirect, useActionData } from "react-router"
import { ErrorMsg } from "../components/ErrorMsg"
import { addProduct } from "../services/productsServices"
import { toast } from "react-toastify"
import { ProductForm } from "../components/ProductForm"

export async function action({ request }: ActionFunctionArgs) {
  const formData = Object.fromEntries(await request.formData())
  // valido
  let error = ""
  if (Object.values(formData).includes("")) {
    error = "Todos los campos son obligatorios"
  }
  if (error.length > 0) return error
  await addProduct(formData)
  toast.success("Producto registrado")
  
  return redirect("/")

}

export const NewProductView = () => {

  const error = useActionData<string>()  

  return (
    <>
      <div className="flex flex-col gap-2 items-start lg:flex-row lg:justify-between lg:items-center">
        <div>
          <h2 className="text-xl md:text-3xl font-semibold text-slate-800">Registrar Producto</h2>
          <p className="text-xs md:text-lg text-slate-400">Llene el formulario para registrar un nuevo producto</p>
        </div>
        <Link
          to="/"
          className="bg-blue-500 rounded py-2 px-3 text-white font-semibold hover:bg-blue-600 transition-all"
        >
          Volver a Inicio
        </Link>
      </div>
      <Form
        className="mt-10 space-y-4"
        method="POST"
      >
        {error && <ErrorMsg>{error}</ErrorMsg>}
        <ProductForm />
        <button
          type="submit"
          className="bg-slate-800 w-full py-3 text-white font-semibold text-lg mt-5 cursor-pointer hover:bg-slate-900 transition-all"
        >Registrar Producto</button>
      </Form>
    </>
  )
}
