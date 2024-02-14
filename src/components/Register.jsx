import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/authContext"
import { Link } from "react-router-dom"

const Register = () => {
    const [username, setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const { register } = useAuth()

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const finalUser = {
            username,
            email,
            password
        }
        
        await register(finalUser)
        navigate('/login')
    }

    return (
        <div>
            <h1>Registrate</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setName(e.target.value)} value={username} placeholder="nombre"/>
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="email"/>
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="contra"/>
                <input type="submit" value='Registrarse'/>
            </form>
            <Link to='/login'>Ya tenes una cuenta? Ingresa</Link>
        </div>
    )
}

export default Register