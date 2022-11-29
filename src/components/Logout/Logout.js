import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import './Logout.css';
// import Dashboard from '../Dashboard/Dashboard';

const Logout = () => {
    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div className='auth-container'>
                {/* <Dashboard/> */}
                <button onClick={() => logout()} className="auth-button">
                    Log Out
                </button>
            </div>
        )
    );
};

export default Logout;