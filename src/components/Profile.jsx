import { useEffect } from "react"
import { useAuth } from "../context/authContext"

const Profile = () => {
    const { user, profile } = useAuth()

    useEffect(async () => {
        const res = await profile()
        console.log(res)
    }, [])  

    return (
        <div>
            <h1>Profile</h1>
            <h2>{user.email}</h2>
        </div>
    )
}

export default Profile