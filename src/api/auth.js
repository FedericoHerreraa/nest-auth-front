import axios from 'axios'
import Cookies from 'js-cookie'

export const loginRequest = async (finalUser) => {
    const res = await axios.post('https://nest-auth-alg9.onrender.com/auth/login', finalUser, { withCredentials: true })
    if (res.data && res.data.token) {
        const token = res.data.token
        Cookies.set('tu_cookie_nombre', token, { expires: 7 });

        return token
    } else {
        console.log('No se encontro el token en la respuesta')
        return null
    }
}

export const registerRequest = async (userFinal) => axios.post('https://nest-auth-alg9.onrender.com/auth/register', userFinal, { withCredentials: true })

export const profileRequest = async () => axios.get('https://nest-auth-alg9.onrender.com/auth/profile', { withCredentials: true })