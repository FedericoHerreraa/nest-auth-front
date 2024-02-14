import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/authContext"
import { Link } from "react-router-dom"

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const { signIn, error, profile } = useAuth()

    const navigate = useNavigate()
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        const finalUser = {
            email,
            password
        }

        const res = await signIn(finalUser)
        if (res) {
            const response = await profile()
            if (response) {
                navigate('/profile')
            }
        }
    }

    return (
        <div>
            <h1>Ingresa</h1>
            <form onSubmit={handleSubmit}>
                <input required type="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="email"/>
                <input required type="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="contra"/>
                <input type="submit" value='Iniciar sesion'/>
            </form>
            {
                error ? (
                    <p style={{ color: 'red' }}>{error}</p>
                ) : ''
            }
            <Link to='/register'>No tenes una cuenta? Registrate</Link>
        </div>
    )
}

export default Login