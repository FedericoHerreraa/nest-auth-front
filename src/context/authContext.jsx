import { createContext, useContext, useState } from "react";
import { loginRequest, registerRequest, profileRequest } from "../api/auth";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    const signIn = async (finalUser) => {
        setLoading(true)
        try {
            const res = await loginRequest(finalUser)
            console.log(res.data)
            setUser(res.data)
        } catch (error) {
            setError(error.response.data)
        } finally {
            setLoading(false)
        }
    }

    const register = async (finalUser) => {
        setLoading(true)
        try {
            const res = await registerRequest(finalUser)
            setUser(res.data)
        } catch (error) {
            setError(error.response.data)
        } finally {
            setLoading(false)
        }
    }

    const profile = async () => {
        setLoading(true)
        try {
            const res = await profileRequest()
            console.log(res)
        } catch (error) {
            console.log(error.response.data)
        } finally {
            setLoading(false)
        }
    }


    return (
        <AuthContext.Provider value={{ user, loading, error, register, signIn, profile }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}