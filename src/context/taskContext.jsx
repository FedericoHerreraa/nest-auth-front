import { createContext, useContext, useState } from "react";
import { createTaskRequest, deleteTaskRequest, getAllTasksRequest, getTaskRequest, updateTaskRequest } from "../api/task";


const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([])

    const getTasks = async () => {
        const res = await getAllTasksRequest()
        setTasks(res)
    }

    const getTask = async (taskId) => {
        const res = await getTaskRequest(taskId)
        return res.data
    }

    const createNewTask = async (newTask) => {
        const res = await createTaskRequest(newTask)
        return res.data
    }

    const updateTask = async (taskUpdated) => {
        await updateTaskRequest(taskUpdated)
    }

    const deleteTask = async (taskId) => {
        await deleteTaskRequest(taskId)
        const newTasks = tasks.filter(tasks => tasks._id !== taskId)
        setTasks(newTasks)
    }

    return (
        <TaskContext.Provider value={{ tasks, getTasks, createNewTask, updateTask, getTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    )
}

export const useTask = () => {
    return useContext(TaskContext)
}