import axios from 'axios'

const prodURL = 'https://nest-auth-alg9.onrender.com'
const localURL = 'http://localhost:3000'

export const loginRequest = async (finalUser) => {
    try {
        const res = await axios.post(`${prodURL}/auth/login`, finalUser, 
            { withCredentials: true, credentials: 'include', headers: { 'Content-Type': 'application/json' }})

        if (res.data.user && res.data.token) {
            const token = res.data.token
            localStorage.setItem('token', JSON.stringify(token))
        }
        return res
    } catch (err) {
        return err.response.data
    }
}

export const registerRequest = async (userFinal) => 
    axios.post(`${prodURL}/auth/register`, userFinal, { withCredentials: true })

export const profileRequest = async () => {
    const token = JSON.parse(localStorage.getItem('token'))
    console.log(token)
    try {
        const res = await axios.get(`${prodURL}/auth/profile`, { headers: { Authorization: `Bearer ${token}` }})
        return res
    } catch (err) {
        console.log(err)
        return err.response.data.error
    }
}

export const verifyToken = () => {
    const token = JSON.parse(localStorage.getItem('token'))
    if (!token) {
        return false
    }
    return true
}