import React from 'react'
import { useSelector } from 'react-redux';

import { Navigate } from 'react-router-dom';

const Protected = ({ children }) => {

    const { isAuthenticate } = useSelector(state => state.user)
    if (!isAuthenticate || !localStorage.getItem("token")) {
        return <Navigate to="/login" replace={true} />
    }
    return children;
}

export default Protected