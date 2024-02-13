import { createContext, useContext, useState } from "react";
import { loginRequest, registerRequest, profileRequest } from "../api/auth";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)


    const signIn = async (finalUser) => {
        const res = await loginRequest(finalUser)
        if (res.data) {
            setUser(res.data.user)
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
        } catch (error) {
            setError(error)
        }
    }

    const profile = async () => {
        setLoading(true)
        try {
            const res = await profileRequest()
            setUser(res)
            setLoading(false)
            return true
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <AuthContext.Provider value={{ user, error, register, signIn, profile }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}