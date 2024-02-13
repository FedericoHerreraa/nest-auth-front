import axios from 'axios'
import Cookies from 'js-cookie'

export const loginRequest = async (finalUser) => {
    try {
        const res = await axios.post('https://nest-auth-alg9.onrender.com/auth/login', finalUser, 
            { withCredentials: true, credentials: 'include', headers: { 'Content-Type': 'application/json' }})

        if (res.data.user && res.data.token) {
            const token = res.data.token
            axios.defaults.headers['Authorization'] = token;
            Cookies.set('token', token, { expires: 7, secure: true });
        }
        return res
    } catch (err) {
        return err.response.data
    }
}

export const registerRequest = async (userFinal) => axios.post('https://nest-auth-alg9.onrender.com/auth/register', userFinal, { withCredentials: true })

export const profileRequest = async () => {
    console.log(axios.defaults.headers.Authorization)
    try {
        const res = await axios.get('https://nest-auth-alg9.onrender.com/auth/profile', { withCredentials: true })
        console.log(res)
        return res.data
    } catch (err) {
        console.log(err)
        return err
    }
}

export const verifyToken = () => {
    const token = axios.defaults.headers.Authorization
    if (!token) {
        return false
    }
    return true
}