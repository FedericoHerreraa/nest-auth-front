import axios from 'axios'

export const loginRequest = async (finalUser) => axios.post('http://localhost:3000/auth/login', finalUser)

export const registerRequest = async (userFinal) => axios.post('http://localhost:3000/auth/register', userFinal)