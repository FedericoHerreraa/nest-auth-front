import { createContext, useContext, useState } from "react";
import { loginRequest, registerRequest, profileRequest, verifyToken } from "../api/auth";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [error, setError] = useState()
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
        const res = await registerRequest(finalUser)
        if (res) {
            setUser(res.data)
            setLoading(false)
            return true
        }
        console.log(res)
        setError(res.message)
        setLoading(false)
        return false
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

    const isAuthenticated = () => {
        const res = verifyToken()
        if (res) {
            return true
        }
        return false
    }

    return (
        <AuthContext.Provider value={{ user, error, loading, register, signIn, profile, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}