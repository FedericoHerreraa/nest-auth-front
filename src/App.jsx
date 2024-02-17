import { Routes, Route, HashRouter } from "react-router-dom"
import Login from "./components/Login"
import Register from "./components/Register"
import Profile from "./components/Profile"
import { AuthProvider } from "./context/authContext"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import CreateTask from "./components/CreateTask"
import { TaskProvider } from "./context/taskContext"
import UpdateTask from "./components/UpdateTask"



function App() {
  return (
    <HashRouter>
      <TaskProvider>
        <AuthProvider>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/createTask" element={<CreateTask/>}/>
            <Route path="/updateTask/:taskId" element={<UpdateTask/>}/>
          </Routes>
        </AuthProvider>
      </TaskProvider>
    </HashRouter>

  )
}

export default App
