import React, { useState } from "react";
import { API_URL2 } from "../../constants";
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from "react-router-dom";

export default function Logout({ setLoggedIn }) {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Stretch Goal: Alert user to token expiration and allow auto re-login
  const handleLogout = async () => {
    const logoutUrl = `${API_URL2}/logout`
    const jwt = localStorage.getItem('jwt');
    console.log(jwt)

    if (!jwt) {
      alert('You are already logged out or your session has expired.');
      setLoggedIn(false);
      navigate('/login')
      return;
    }

    try {

      // Decode the token to check expiration
      const decoded = jwtDecode(jwt);
      const now = Date.now() / 1000;

      if (decoded.exp < now) {
        alert('Your session has expired. Please log in again.');
        localStorage.removeItem('jwt');
        setLoggedIn(false);
        navigate('/login');
        return;
      }
        const response = await fetch(logoutUrl, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${jwt}`,
                "Content-Type": "application/json",
            },
        });

      if (response.ok) {
        alert('Logged out successfully.');
        localStorage.removeItem('jwt');
        setLoggedIn(false); 
        
        console.log("Logout successful.")

      } else {
        const message = response.json();
        setErrorMessage(message)
        console.error('Logout failed')
        alert({errorMessage})
    }

    } catch (error) {
        console.error("An error occurred:", error);
        alert(error)
    }
    
  };

  return (
    <>    
    <button className="btn btn-primary ms-3" onClick={handleLogout}>
      Logout
    </button>
    </>
  );
}
