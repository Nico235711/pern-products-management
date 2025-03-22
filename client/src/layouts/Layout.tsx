import { Outlet } from "react-router"

const YEAR = new Date().getFullYear()

export const Layout = () => {

  return (
    <>
      <header className="bg-blue-950 py-10">
        <div className="max-w-xs md:max-w-xl lg:max-w-7xl mx-auto">
          <h1 className="text-2xl lg:text-4xl text-white font-semibold">Administrador de Productos</h1>
        </div>
      </header>
      
      <main className="max-w-xs md:max-w-xl lg:max-w-7xl mx-auto my-20 p-10 bg-white shadow rounded">
        <Outlet />
      </main>

      <footer className="bg-blue-950 py-10">
        <div className="max-w-xs md:max-w-xl lg:max-w-7xl mx-auto">
          <p className="text-white text-lg font-semibold">&copy; Todos los derechos reservados - {YEAR}</p>
        </div>
      </footer>
    </>
  )
}
