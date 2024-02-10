import { useState } from "react"
import { loginRequest } from "../api/auth"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [user,setUser] = useState()
    const [password,setPassword] = useState('')

    const navigate = useNavigate()
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        const finalUser = {
            user,
            password
        }
        console.log(finalUser)

        await loginRequest(finalUser)
        navigate('/profile')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setUser(e.target.value)} value={user} placeholder="email"/>
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="contra"/>
                <input type="submit" value='Iniciar sesion'/>
            </form>
        </div>
    )
}

export default Login