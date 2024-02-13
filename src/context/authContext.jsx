import { createContext, useContext, useState } from "react";
import { loginRequest, registerRequest, profileRequest } from "../api/auth";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const userLoaded = JSON.parse(localStorage.getItem('user'))
    const [user, setUser] = useState(userLoaded)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)


    const signIn = async (finalUser) => {
        const res = await loginRequest(finalUser)
        if (res.data) {
            setUser(res.data.user)
            localStorage.setItem('user', JSON.stringify(res.data.user))
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
            localStorage.setItem('user', JSON.stringify(res.data))
        } catch (error) {
            setError(error)
        }
    }

    const profile = async () => {
        setLoading(true)
        const res = await profileRequest()
        console.log(res)
        localStorage.setItem('user', JSON.stringify(res))
        setUser(res)
        setLoading(false)
        return true
    }

    console.log(user)


    return (
        <AuthContext.Provider value={{ user, error, loading, register, signIn, profile }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}