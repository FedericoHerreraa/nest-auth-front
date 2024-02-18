import { useAuth } from "../context/authContext"
import { useTask } from "../context/taskContext"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


const Tasks = () => {
    const { tasks, getTasks, deleteTask } = useTask()
    
    getTasks()

    const navigate = useNavigate()

    return (
        <div>
            <h1 className="text-2xl m-5 border-solid border-b w-fit">Mis tareas:</h1>
            <div className="flex flex-wrap">
                {
                    tasks.map(task => (
                        <div className="bg-zinc-500 p-7 rounded-md m-5 w-80" key={task._id}>
                            <h2 className="text-lg font-bold">Titulo: {task.title}</h2>
                            <div className="bg-zinc-600 rounded-md p-5">
                                <p className="text-white font-extralight">{task.description}</p>
                            </div>
                            <div className="flex justify-between">
                                <button 
                                    className="bg-blue-400 rounded-md p-1 m-2"
                                    onClick={() => {
                                        navigate(`/updateTask/${task._id}`)
                                    }}
                                    >Editar
                                </button>
                                <button 
                                    className="bg-red-400 rounded-md px-2 m-2"
                                    onClick={() => {
                                        deleteTask(task._id)
                                    }}
                                    >X
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )

}

export default Tasks