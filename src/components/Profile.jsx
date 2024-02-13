import { useEffect, useState } from "react"
import { useAuth } from "../context/authContext"

const Profile = () => {
  const { user, profile, loading } = useAuth()

  useEffect(() => {
    profile()
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