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
      } catch (error) {
        console.error("Error fetching profile:", error);
        navigate('/login');
      }
    };

    fetchData();
  }, [])

  if (loading) { 
    return <p>Loading...</p>
  }

  return (
    <div>
      <h1>Profile</h1>
      <h2>{user.email}</h2>
      <p>{user.username}</p>
      <button onClick={() => {
        const response = verifyToken()
        if (response) {
          localStorage.removeItem('token')
          navigate('/login')
        }
      }}>Logout</button>
    </div>
  )
}

export default Profile