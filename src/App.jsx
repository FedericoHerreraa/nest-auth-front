import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Register from "./components/Register"
import Profile from "./components/Profile"
import { AuthProvider } from "./context/authContext"
import Home from "./components/Home"



function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  )
}

export default App
