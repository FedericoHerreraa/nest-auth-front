import { useEffect } from "react"
import { useAuth } from "../context/authContext"
import { verifyToken } from "../api/auth"
import { useNavigate } from "react-router-dom"

const Profile = () => {
  const { user, loading } = useAuth()
  const navigate = useNavigate()
  
  useEffect(() => {
    const checkToken = () => {
      const res = verifyToken();
        if (!res) {
          navigate('/login');
        }
      };
    
    checkToken();
  }, [navigate]);

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h1>Profile</h1>
      <h2>{user.email}</h2>
      <p>{user.username}</p>
    </div>
  )
}

export default Profile