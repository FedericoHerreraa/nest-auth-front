import axios from 'axios'
import { profileRequest } from './auth'

const prodURL = 'https://nest-auth-alg9.onrender.com'
const localURL = 'http://localhost:3000'

export const getAllTasksRequest = async () => {
    try {
        const res = await profileRequest()
        const id = res.data._id

        const token = JSON.parse(localStorage.getItem('token'))
    
        const response = await axios.get(`${prodURL}/tasks/allTasks?userId=${id}`, { headers: { Authorization: `Bearer ${token}` }})
        return response.data
    } catch (err) {
        console.log(err)
        return err
    }
}

export const getTaskRequest = async (taskId) => {
    try {
        const token = JSON.parse(localStorage.getItem('token'))
        const res = await axios.get(`${prodURL}/tasks/getTask?taskId=${taskId}`, { headers: { Authorization: `Bearer ${token}` }})
        return res
    } catch (err) {
        console.log(err)
        return err
    }
}

export const createTaskRequest = async (task) => {
    try {
        const res = await profileRequest()
        const id = res.data._id

        const { title, description } = task
        const newTask = {
            userId: id,
            title,
            description
        }

        const token = JSON.parse(localStorage.getItem('token'))

        const response = await axios.post(`${prodURL}/tasks/createTask`, newTask, { headers: { Authorization: `Bearer ${token}` }})
        return response
    } catch (err) {
        console.log(err)
        return err
    }
}

export const updateTaskRequest = async (taskUpdated) => {
    try { 
        const token = JSON.parse(localStorage.getItem('token'))

        const response = await axios.put(`${prodURL}/tasks/updateTask`, taskUpdated, { headers: { Authorization: `Bearer ${token}` }})
        return response
    } catch (err) {
        console.log(err)
        return err
    }
}

export const deleteTaskRequest = async (taskId) => {
    try {
        const token = JSON.parse(localStorage.getItem('token'))
        const response = await axios.delete(`${prodURL}/tasks/deleteTask?taskId=${taskId}`, { headers: { Authorization: `Bearer ${token}` }})
        return response
    } catch (err) {
        console.log(err)
        return err
    }
}