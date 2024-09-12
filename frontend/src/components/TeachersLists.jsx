import React, { useState, useEffect } from 'react';
import { API_URL } from '../constants';

function TeachersLists () {
    const [teachers, setTeachers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const teachersUrl = `${API_URL}/teachers`;

    useEffect(() => {
        async function loadTeachers() {
            try {
                const response = await fetch(teachersUrl);
                if (response.ok) {
                    const json = await response.json();
                    console.log("Fetched teachers data:", json);
                    setTeachers(json);
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
        loadTeachers();
    }, [teachersUrl]);

    return (
        <>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <div>
            <h2>Teachers</h2>
            {teachers.map((teacher) => ( // Map through the list of teachers
                <div key={teacher.id} className="teachers-container">
                    <h4>{teacher.name}</h4>
                    <p>{teacher.email}</p>
                    <p>School: {teacher.school}</p> {/* Display school name */}
                    <p>School ID: {teacher.school_id}</p> {/* Display school ID */}
                </div>
            ))}
        </div>
        </>
    );
};

export default TeachersLists;
