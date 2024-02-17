import { Link } from "react-router-dom"
import { useAuth } from "../context/authContext"
import Tasks from "./Tasks"

const Home = () => {
    const { isAuthenticated } = useAuth()

    return (
        <div>
            <h1 className="text-2xl m-10 text-center">Bienvenido al administrador de tareas!</h1>
            {
                isAuthenticated() ? (
                    <div>
                        <Tasks/>
                    </div>
                        
                ) : (
                    <div className="flex justify-center">
                        <Link to='/login' className="bg-blue-900 p-3 mx-10 rounded-md text-white">Iniciar sesion</Link>
                        <Link to='/register' className="bg-blue-900 p-3 rounded-md text-white">Registrarse</Link>
                    </div>
                )
            }
        </div>
    )

}

export default Home