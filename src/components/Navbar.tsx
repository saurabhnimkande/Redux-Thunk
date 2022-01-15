import { Link } from "react-router-dom"
import "./Navbar.css"
export const Navbar = () => {
    return (
        <div id="mainNavbar">
            <div>
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github"></img>
            </div>
            <div>
            <Link to="/" className="linkNavbar">Homepage</Link>
            </div>
            <div>
            <Link to="/login" className="linkNavbar">Login</Link>
            </div>
            <div>
            <Link to="/register" className="linkNavbar">Register</Link>
            </div>
            <div>
            <Link to="/dashboard" className="linkNavbar">Dashboard</Link>
            </div>
        </div>
    )
}