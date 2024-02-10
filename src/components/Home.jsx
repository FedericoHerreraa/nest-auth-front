import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Link to='/login'>Iniciar sesion</Link>
            <Link to='/register'>registro</Link>
        </div>
    )

}

export default Home