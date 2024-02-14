import { createContext, useContext, useState } from "react";
import { loginRequest, registerRequest, profileRequest } from "../api/auth";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)


    const signIn = async (finalUser) => {
        const res = await loginRequest(finalUser)
        if (res.data) {
            setUser(res.data.user)
            setLoading(false)

            return true
        }
        console.log(res.message)
        setError(res.message)
        return false
    }

    const register = async (finalUser) => {
        try {
            const res = await registerRequest(finalUser)
            setUser(res.data)
            setLoading(false)
        } catch (error) {
            setError(error)
        }
    }

    const profile = async () => {
        const res = await profileRequest()
        if (res === 'Unauthorized') {
            setLoading(false)
            return false
        }
        setUser(res.data)
        setLoading(false)

        return true
        
    }

    return (
        <AuthContext.Provider value={{ user, error, loading, register, signIn, profile }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}