import { useEffect, useState } from "react"
import { useAuth } from "../context/authContext"
import { profileRequest } from "../api/auth"

const Profile = () => {
  const { user } = useAuth()
  // console.log(user)

  if (!user) {
    return <p>No se pudo obtener el perfil del usuario.</p>;
  }

  return (
      <div>
          <h1>Profile</h1>
          <h2>username</h2>
      </div>
  )
}

export default Profile