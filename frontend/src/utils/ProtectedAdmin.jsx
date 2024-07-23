import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedAdmin = ({ children }) => {
    const { user, isAuthenticate } = useSelector((state) => state.user)
    if (!user || !isAuthenticate || !localStorage.getItem("token")) {
        <Navigate to={"/login"} replace={true} />
    }
    if (user && user.role !== "admin") {
        <Navigate to={"/"} replace={true} />
    }
    return children;
}

export default ProtectedAdmin