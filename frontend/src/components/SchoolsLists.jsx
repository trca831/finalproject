import React, { useState, useEffect } from "react";
import { API_URL } from "../constants";



function SchoolsLists () {
    const [schools, setSchools] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const schoolsUrl = `${API_URL}/schools`;

    useEffect(() => {
        async function loadSchools() {
            try {
                const response = await fetch(schoolsUrl);
                if (response.ok) {
                    const json = await response.json();
                    console.log("Fetched schools data:", json);
                    setSchools(json);
                } else {
                    throw response;
                }
            } catch (e) {
                setError("An error occurred.");
                console.log("An error occurred", e);
            } finally {
                setLoading(false);
            }
        }
        loadSchools();
    }, [schoolsUrl]);


    return(
        <>
        <div>
            <h2>Schools</h2>
            {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <div>
            {schools.map((school) => ( // Map through the list of schools
                <div key={school.id} className="schools-container">
                    <h4>{school.name}</h4>
                    <p>{school.address}</p>
                    
                </div>
            ))}
        </div>
        </div>
        </>
    )

}
export default SchoolsLists;