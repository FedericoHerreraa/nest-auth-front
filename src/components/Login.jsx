import { useState } from "react"
import { loginRequest } from "../api/auth"

const Login = () => {
    const [user,setUser] = useState()
    const [password,setPassword] = useState('')
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        const finalUser = {
            user,
            password
        }
        console.log(finalUser)

        const res = await loginRequest(finalUser)
        console.log(res)
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