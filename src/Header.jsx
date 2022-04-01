import React from "react";
import { Link } from "react-router-dom"
function Header() {
    return (
            <ul style={{display: "flex", alignItems: "center", justifyContent: "space-around", width: "200px" }}>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/chats">Chats</Link>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
    )
}

export default Header