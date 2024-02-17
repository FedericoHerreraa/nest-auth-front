import { useEffect, useState } from "react"
import { useTask } from "../context/taskContext"
import { useAuth } from "../context/authContext"
import { useNavigate } from "react-router-dom"

const CreateTask = () => {
    const [title, setTitle] = useState('')
    const [description, setDesciption] = useState('')

    const { createNewTask } = useTask()
    const { isAuthenticated } = useAuth()

    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated() === false) {
            navigate('/login')
        }
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newTask = {
            title,
            description
        }
        await createNewTask(newTask)
        navigate('/')
    }

    return (
        <div>
            <h1 className="text-2xl text-center m-10">Crear tarea</h1>
            <form action="" onSubmit={handleSubmit} className="flex flex-col items-center">
                <input 
                    required 
                    type="text" 
                    placeholder="Titulo" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                    className="bg-zinc-300 p-2 rounded-md"
                />
                <input 
                    required 
                    type="text" 
                    placeholder="Descripcion" 
                    value={description} 
                    onChange={(e) => setDesciption(e.target.value)}
                    className="bg-zinc-300 p-2 my-3 rounded-md"    
                />
                <input 
                    type="submit" 
                    value="Crear tarea"
                    className="bg-blue-300 py-1 px-3 my-3 hover:bg-blue-500 transition-all rounded-md cursor-pointer"
                />
            </form>
        </div>
    )
}

export default CreateTask