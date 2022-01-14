import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <div>
            <Link to="/" style={{margin:"20px"}}>HomePage</Link>
            <Link to="/login">Login</Link>
            <Link to="/register" style={{margin:"20px"}}>Register</Link>
            <Link to="/dashboard">Dashboard</Link>
        </div>
    )
}