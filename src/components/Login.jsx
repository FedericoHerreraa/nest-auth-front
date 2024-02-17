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
            <h1 className="text-2xl text-center m-5">Ingresar</h1>
            <form onSubmit={handleSubmit} className="flex flex-col items-center mt-10">
                <input 
                    required 
                    type="email" 
                    name="email" 
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email}
                    placeholder="email"
                    className="bg-zinc-300 p-2 rounded-md"
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
                    value='Iniciar sesion'
                    className="mt-7 bg-blue-400 rounded-md py-1 px-3 cursor-pointer"
                />
                <Link to='/register' className="mt-10 hover:underline">No tenes una cuenta? Registrate</Link>
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