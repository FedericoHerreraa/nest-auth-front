import { useEffect, useState } from "react"
import { useAuth } from "../context/authContext"

const Profile = () => {
  const { user, profile } = useAuth()
  console.log(user)

  useEffect(async () => {
    const res = await profile()
    console.log(res)
  }, [])

  return (
      <div>
          <h1>Profile</h1>
          <h2>username</h2>
      </div>
  )
}

export default Profile