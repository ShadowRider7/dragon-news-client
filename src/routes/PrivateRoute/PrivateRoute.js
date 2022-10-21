import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

import Spinner from 'react-bootstrap/Spinner';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    let location = useLocation();
    if (loading) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace ></Navigate>
    }
    else {
        return children;
    }
};

export default PrivateRoute;