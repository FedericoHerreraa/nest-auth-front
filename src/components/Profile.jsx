import { useEffect, useState } from "react"
import { useAuth } from "../context/authContext"
import { profileRequest } from "../api/auth"

const Profile = () => {
    // const { user } = useAuth()
    const [perfil, setPerfil] = useState(null);

    useEffect(async () => {
        const obtenerPerfil = async () => {
            try {
              const perfilObtenido = await profileRequest();
              setPerfil(perfilObtenido);
            } catch (error) {
              console.error('Error al obtener el perfil:', error);
            }
          };
      
          obtenerPerfil();
    }, [])  

    if (!perfil) {
        return <p>No se pudo obtener el perfil del usuario.</p>;
    }

    return (
        <div>
            <h1>Profile</h1>
            <h2>{perfil.email}</h2>
        </div>
    )
}

export default Profile