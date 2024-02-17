import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/authContext"
import { Link } from "react-router-dom"

const Register = () => {
    const [username, setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const { register, error } = useAuth()

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const finalUser = {
            username,
            email,
            password
        }
        
        const response = await register(finalUser)
        if (response) {
            navigate('/login')
        }
    }

    console.log(error)

    return (
        <div>
            <h1 className="text-2xl text-center m-5">Registrarse</h1>
            <form onSubmit={handleSubmit} className="flex flex-col items-center mt-10">
                <input 
                    required 
                    type="text" 
                    name="username" 
                    onChange={(e) => setName(e.target.value)} 
                    value={username}
                    placeholder="username"
                    className="bg-zinc-300 p-2 rounded-md"
                />
                <input 
                    required 
                    type="email" 
                    name="email" 
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email}
                    placeholder="email"
                    className="bg-zinc-300 p-2 mt-3 rounded-md"
                />
                <input 
                    required 
                    type="password" 
                    name="password" 
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password} 
                    placeholder="password"
                    className="bg-zinc-300 p-2 mt-3 rounded-md"
                />
                <input 
                    type="submit" 
                    value='Registrarse'
                    className="mt-7 bg-blue-400 rounded-md py-1 px-3 cursor-pointer"
                />
                <Link to='/login' className="mt-10 hover:underline">Ya tenes una cuenta? Ingresa</Link>
            </form>
            {
                Array.isArray(error) ? (
                    error.map(err => (
                        <p style={{ color:'red' }}>{err}</p>
                    ))
                ) : (
                    <p style={{ color:'red' }}>{error}</p>
                )
            }
        </div>
    )
}

export default Register