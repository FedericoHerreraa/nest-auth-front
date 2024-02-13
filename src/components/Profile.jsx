import { useEffect, useState } from "react"
import { useAuth } from "../context/authContext"

const Profile = async () => {
  const { user, profile, loading } = useAuth()

  const response = await profile()
  console.log(response)

  if (response) {
    return (
      <div>
          <h1>Profile</h1>
          <h2>{user.email}</h2>
          <p>{user.username}</p>
      </div>
    )
  } else {
    return <p>Loading...</p>
  }

  // if (loading) {
    
  // }

  // return (
      
  // )
}

export default Profile