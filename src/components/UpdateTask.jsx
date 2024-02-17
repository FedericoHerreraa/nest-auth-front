import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useTask } from "../context/taskContext"

const UpdateTask = () => {
    const { updateTask, getTask } = useTask()
    const { taskId } = useParams()

    const [oldTitle, setOldTitle] = useState('')
    const [oldDescription, setOldDescription] = useState('')
    
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        const oldTask = async () => {
            const oldTask = await getTask(taskId)
            setOldTitle(oldTask.title)
            setOldDescription(oldTask.description)
        }
        oldTask()
    }, [])

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const taskUpdated = {
            taskId,
            title: title || oldTitle,
            description: description || oldDescription
        }

        await updateTask(taskUpdated)
        navigate('/profile')
    }

    return (
        <div>
            <h1 className="text-2xl text-center m-10">Actualizar tarea</h1>
            <form action="" onSubmit={handleSubmit} className="flex flex-col items-center">
                <input 
                    type="text" 
                    placeholder="Titulo" 
                    defaultValue={oldTitle}
                    onChange={(e) => setTitle(e.target.value)}
                    className="bg-zinc-300 p-2 rounded-md"
                />
                <input 
                    type="text" 
                    placeholder="Descripcion"  
                    defaultValue={oldDescription}
                    onChange={(e) => setDescription(e.target.value)}
                    className="bg-zinc-300 p-2 my-3 rounded-md"    
                />
                <input 
                    type="submit" 
                    value="Actualizar tarea"
                    className="bg-blue-300 py-1 px-3 my-3 hover:bg-blue-500 transition-all rounded-md cursor-pointer"
                />
            </form>
        </div>
    )
}

export default UpdateTask