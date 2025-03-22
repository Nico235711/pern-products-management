import { RouterProvider } from "react-router"
import { routes } from "./routes"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const App = () => {

  return (
    <>
      <RouterProvider router={routes} />
      <ToastContainer
        autoClose={1500}
        pauseOnHover={false}
      />
    </>
  )
}

export default App