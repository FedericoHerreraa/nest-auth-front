import { useEffect, useState } from "react"
import { useAuth } from "../context/authContext"

const Profile = async () => {
  const { user, profile, loading } = useAuth()

  const response = await profile()
  console.log(response)

  if (!response) {
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