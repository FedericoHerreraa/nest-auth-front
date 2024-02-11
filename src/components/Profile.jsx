import { useAuth } from "../context/authContext"

const Profile = () => {
    const { user } = useAuth()
    console.log(user)
    return (
        <div>
            <h1>Profile</h1>
            <h2>{user.email}</h2>
        </div>
    )
}

export default Profile