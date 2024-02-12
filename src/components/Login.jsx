import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/authContext"

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const { signIn } = useAuth()

    const navigate = useNavigate()
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        const finalUser = {
            email,
            password
        }

        await signIn(finalUser)
        navigate('/profile')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="email"/>
                <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="contra"/>
                <input type="submit" value='Iniciar sesion'/>
            </form>
        </div>
    )
}

export default Login