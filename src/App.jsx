import { Route, Routes } from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Products from "./pages/Products"
import { Coment } from "./pages/Coment"
import Contakc from "./pages/Contakc"

function App() {
  return (
    <div className="dark:bg-black h-screen bg-white">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/coment" element={<Coment />} />
          <Route path="/contakc/:id" element={<Contakc />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
