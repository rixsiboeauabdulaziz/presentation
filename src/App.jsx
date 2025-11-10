import { Route, Routes } from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Products from "./pages/Products"
import { Coment } from "./pages/Coment"
import Contacts from "./pages/Contacts"

function App() {
  return (
    <div className="dark:bg-black h-screen bg-white">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/coment" element={<Coment />} />
          <Route path="/contacts/:id" element={<Contacts />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
