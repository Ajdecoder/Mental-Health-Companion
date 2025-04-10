import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function RefrshHandler({ setIsAuthenticated }) {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const data = localStorage.getItem('user-info');
        const token = data ? JSON.parse(data)?.token : null;

        if (token) {
            setIsAuthenticated(true);
            if (location.pathname === '/login') {
                navigate('/dashboard');
            }
        } else {
            setIsAuthenticated(false);
        }

        console.log("User token:", token); // Debugging
    }, [location, navigate, setIsAuthenticated]);

    return null;
}

export default RefrshHandler;
