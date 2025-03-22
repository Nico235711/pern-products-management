import { ActionFunctionArgs, Link, useLoaderData } from "react-router"
import { getAllProducts, updateProductAvailability } from "../services/productsServices"
import { Product } from "../types"
import { ProductsDetails } from "../components/ProductsDetails"

export async function loader() {
  const products = await getAllProducts()
  return products ?? []
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = Object.fromEntries(await request.formData())
  const id = Number(formData.id)
  await updateProductAvailability(id)
  return
}

export const ProductsView = () => {

  const products = useLoaderData<Product[]>() ?? []

  return (
    <div>
      <div className="flex flex-col gap-2 items-start lg:flex-row lg:justify-between lg:items-center">
        <div>
          <h2 className="text-xl md:text-3xl font-semibold text-slate-800">Productos</h2>
          <p className="text-xs md:text-lg text-slate-400">Administre sus productos aquí</p>
        </div>
        <Link
          to="/products/new"
          className="bg-blue-500 rounded py-2 px-3 text-white font-semibold hover:bg-blue-600 transition-all"
        >
          Registrar un producto
        </Link>
      </div>
      {products.length === 0 ? (
        <p className="mt-10 text-slate-800 text-center">No hay productos registrados</p>
      ) : (
        <div className="mt-10">
          {products.map(product => (
            <ProductsDetails
              key={product.id}
              product={product} 
            />
          ))}
        </div>
      )}
    </div>
  )
}
