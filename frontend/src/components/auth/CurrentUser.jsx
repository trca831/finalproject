import React, { useEffect, useState } from 'react';
import { API_URL2 } from '../../constants';

const CurrentUser = ({ setLoggedIn, setUser, user }) => {
    // const [user, setUser] = useState(null);
    const userUrl = `${API_URL2}/current_user`

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(userUrl, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    setUser(data);
                } else {
                    console.log("No user logged in.")
                    setUser(null);
                    const error = await response.json()
                    console.log(error)
                }
            } catch (error) {
                console.error("Error fetching current user:", error);
            }
        };

        fetchUser();
    }, [setLoggedIn, setUser, userUrl]);
    // Stretch Goal: Add admin dashboard
    if (!user) return null;

    return (
        <div className='m-0 p-0'>
            <p className='text-white bold me-5'><em><strong>Welcome, {user.name}!</strong></em></p>
            {user.role === 'admin' && <Link to="/admin">Admin Dashboard</Link>}
        </div>
    );
};

export default CurrentUser;
