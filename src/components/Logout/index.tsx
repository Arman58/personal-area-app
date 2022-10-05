import {useNavigate} from "react-router-dom";
import React from "react";


const Logout: React.FC = () => {
    const navigate = useNavigate()

    const handleLogOut = () => {
        localStorage.clear()
        navigate("/login")
    }
    
    return (
        <>
            <div style={{cursor: "pointer"}} onClick={handleLogOut}>Log Out</div>
        </>
    )
}

export default Logout
