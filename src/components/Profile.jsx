import { Link } from "react-router-dom"
import { useAuth } from "../context/authContext"

const Profile = () => {
    const { user } = useAuth()
    return (
        <div>
            <h1>Profile</h1>
            <h2>{user.email}</h2>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
        </div>
    )
}

export default Profile