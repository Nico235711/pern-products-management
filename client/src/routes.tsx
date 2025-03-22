import { createBrowserRouter } from "react-router";
import { Layout } from "./layouts/Layout";
import {
  action as actionNewProduct,
  NewProductView
}  from "./views/NewProductView";

import {
  action as actionProductAvailability,
  loader as loaderProduct,
  ProductsView
} from "./views/ProductsView";
import {
  action as actionEditProduct,
  EditProductView,
  loader as loaderEditProduct
} from "./views/EditProductView";
import { action as actionDeleteProduct } from "./components/ProductsDetails";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: <ProductsView />,
        index: true, // le indico que es la ruta principal
        loader: loaderProduct,
        action: actionProductAvailability
      },
      {
        path: "products/new",
        element: <NewProductView />,
        action: actionNewProduct
      },
      {
        path: "products/edit/:id",
        element: <EditProductView />,
        loader: loaderEditProduct,
        action: actionEditProduct
      },
      {
        path: "products/delete/:id",
        action: actionDeleteProduct
      }
    ]
  }
])