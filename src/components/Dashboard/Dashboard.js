import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = () => {
    const { user, isAuthenticated } = useAuth0();
    const capitalizedName = user.nickname.charAt(0).toUpperCase() + user.nickname.slice(1)

    return (
        isAuthenticated && (
            <div className='auth-button'>
                Hello, {capitalizedName}
            </div>
        )
    );
};

export default Dashboard;