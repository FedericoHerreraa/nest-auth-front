import axios from 'axios'
import Cookies from 'js-cookie'

export const loginRequest = async (finalUser) => {
    try {
        const res = await axios.post('https://nest-auth-alg9.onrender.com/auth/login', finalUser, { withCredentials: true })
        if (res.data.user && res.data.token) {
            const token = res.data.token
            Cookies.set('token', `Bearer ${token}`, { expires: 7 });
        }
        return res
    } catch (err) {
        return err
    }
}

export const registerRequest = async (userFinal) => axios.post('https://nest-auth-alg9.onrender.com/auth/register', userFinal, { withCredentials: true })

export const profileRequest = async () => axios.get('https://nest-auth-alg9.onrender.com/auth/profile', { withCredentials: true })