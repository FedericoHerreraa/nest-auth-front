import { useEffect } from "react"
import { useAuth } from "../context/authContext"
import { verifyToken } from "../api/auth"
import { useNavigate } from "react-router-dom"

const Profile = () => {
  const { user, loading, profile } = useAuth()
  const navigate = useNavigate()
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await profile();
        if (!res) navigate('/login');
        return
      } catch (error) {
        console.error("Error fetching profile:", error);
        navigate('/login');
        return 
      }
    };

    fetchData();
  }, [])

  const logout = () => {
    const response = verifyToken()
      if (response) {
        localStorage.removeItem('token')
        navigate('/login')
    }
  }

  if (loading) { 
    return <p>Loading...</p>
  }

  return (
    <div>
      <h1 className="text-2xl text-center m-7">Bienvenido {user.username}</h1>
      <div className="flex flex-col items-center">
        <div className="bg-zinc-400 p-7 rounded-md items-center">
          <h2>Email: {user?.email}</h2>
          <button 
            className="bg-blue-500 py-1 px-3 rounded-md mt-3"
            onClick={logout} 
            >Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile