import { useEffect, useState } from "react"
import { useAuth } from "../context/authContext"

const Profile = async () => {
  const { user, profile, loading } = useAuth()

  let res
  useEffect(() => {
    profile().then((response) => {
      res = response
    })
  }, [])

  console.log(res)

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