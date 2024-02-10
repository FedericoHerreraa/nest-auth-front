import { useAuth } from "../context/authContext"

const Profile = () => {
    const { user } = useAuth()
    return (
        <div>
            <h1>Profile</h1>
            <h2>{user.email}</h2>
        </div>
    )
}

export default Profile