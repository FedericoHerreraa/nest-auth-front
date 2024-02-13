import { useEffect, useState } from "react"
import { useAuth } from "../context/authContext"

const Profile = () => {
  const { user, profile } = useAuth()
  const [loading, setLoading] = useState(false)

  useEffect(async () => {
    setLoading(true)
    await profile()
    setLoading(false)
  }, [])

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