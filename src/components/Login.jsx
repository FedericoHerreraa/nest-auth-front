import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/authContext"

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const { signIn, error } = useAuth()

    const navigate = useNavigate()
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        const finalUser = {
            email,
            password
        }

        const res = await signIn(finalUser)
        if (res) {
            navigate('/profile')
        }
    }

    return (
        <div>
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
        </div>
    )
}

export default Login