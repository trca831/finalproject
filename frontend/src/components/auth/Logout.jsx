import React, { useState } from "react";
import { API_URL2 } from "../../constants";

export default function Logout({ setLoggedIn }) {
    const [errorMessage, setErrorMessage] = useState("");

  const handleLogout = async () => {
    const logoutUrl = `${API_URL2}/logout`
    const jwt = localStorage.getItem('jwt');
    console.log(jwt)

    try {
        // FIX JWT ISSUE
        const response = await fetch(logoutUrl, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${jwt}`,
                "Content-Type": "application/json",
            },
        });

    if (response.ok) {
        setLoggedIn(false); 
        localStorage.removeItem('jwt')

    } else {
        const message = response.json();
        setErrorMessage(message)
        console.error('Logout failed')
    }

    } catch (error) {
        console.error("An error occurred:", error);
    }
    
  };

  return (
    <>
    <div className={errorMessage ? "text-center text-white text-bold mb-3" : "d-none"} id="submitErrorMessage">
              {errorMessage && <p>{errorMessage}</p>}
              </div>
    <button onClick={handleLogout}>
      Logout
    </button>
    </>
  );
}
