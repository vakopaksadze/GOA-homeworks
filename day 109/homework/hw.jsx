import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom"
import { useState } from "react"

/*
ProtectedRoute ამოწმებს არის თუ არა მომხმარებელი ავტორიზებული.
თუ localStorage-ში user არ არსებობს → მომხმარებელი გადავა /login გვერდზე
Navigate კომპონენტი აკეთებს redirect-ს სხვა route-ზე
*/
function ProtectedRoute({ children }) {
  const user = localStorage.getItem("user")

  if (!user) {
    return <Navigate to="/login" />
  }

  return children
}

function Home() {
  return <h1>Home Page</h1>
}

function Login() {

  const login = () => {
    localStorage.setItem("user", "true")
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={login}>Login</button>
    </div>
  )
}

function Register() {
  return <h1>Register Page</h1>
}

function VerificationPage() {
  return <h1>Verification Page</h1>
}

function Nav() {

  const logout = () => {
    localStorage.removeItem("user")
  }

  return (
    <nav>
      {/* Link ვიყენებთ <a>-ის ნაცვლად რადგან არ ხდება გვერდის სრული refresh */}
      <Link to="/">Home</Link> |{" "}
      <Link to="/login">Login</Link> |{" "}
      <Link to="/panel">Admin Panel</Link> |{" "}
      <button onClick={logout}>Logout</button>
    </nav>
  )
}

function AdminPanel() {

  const [products, setProducts] = useState([])

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")

  const addProduct = (e) => {
    e.preventDefault()

    const newProduct = {
      id: Date.now(),
      name: name,
      price: price,
      description: description
    }

    setProducts([...products, newProduct])

    setName("")
    setPrice("")
    setDescription("")
  }

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id))
  }

  return (
    <div>
      <h2>Admin Panel</h2>

      <form onSubmit={addProduct}>
        {/* controlled inputs */}
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="price"
          value={price}
          onChange={(e)=>setPrice(e.target.value)}
        />

        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
        />

        <button>Add Product</button>
      </form>

      <hr />

      {products.length === 0 ? (
        <p>There are no products</p>
      ) : (
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>
                  <button onClick={()=>deleteProduct(product.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* 
      როდესაც state იცვლება (setProducts),
      React თავიდან render-ს აკეთებს კომპონენტს
      და პროდუქტების სია ავტომატურად განახლდება
      */}
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<VerificationPage />} />

        <Route
          path="/panel"
          element={
            <ProtectedRoute>
              <AdminPanel />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App