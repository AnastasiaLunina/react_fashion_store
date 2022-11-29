import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import './Login.css';

const Login = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        <div>
            {!isAuthenticated && (
                <button onClick={() => loginWithRedirect()} className="auth-button">
                    Log In
                </button>)
            }
        </div>
    );
};

export default Login;