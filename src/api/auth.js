import axios from 'axios'

export const loginRequest = async (finalUser) => {
    const res = await axios.post('https://nest-auth-alg9.onrender.com/auth/login', finalUser, { withCredentials: true })
    console.log(res)
}

export const registerRequest = async (userFinal) => axios.post('https://nest-auth-alg9.onrender.com/auth/register', userFinal, { withCredentials: true })

export const profileRequest = async () => axios.get('https://nest-auth-alg9.onrender.com/auth/profile', { withCredentials: true })