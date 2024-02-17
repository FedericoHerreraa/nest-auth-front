import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="bg-zinc-800 p-6 flex justify-around">
            <Link to='/' className="hover:underline hover:decoration-purple-50 text-white text-lg">Inicio</Link>
            <Link to='/profile' className="hover:underline hover:decoration-purple-50  text-white text-lg">Perfil</Link>
            <Link to='/createTask' className="hover:underline hover:decoration-purple-50  text-white text-lg">Crear tarea</Link>
        </div>
    )
}

export default NavBar