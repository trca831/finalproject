import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../constants';

const NewKit = () => {
  const [kitData, setKitData] = useState('');
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [grade_level, setGradeLevel] = useState('')
  const [messages, setMessages] = useState('');
  const navigate = useNavigate();
  const kitUrl = `${API_URL}/kits`

  const handleSubmit = async (e) => {
    e.preventDefault();
       
      const updatedKitData = {
          name,
          description,
          grade_level,
        
      };
    
      try {
        // Send POST request to registration endpoint
        const response = await fetch(kitUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedKitData),
        });
    
        if (response.ok) {
          
          console.log("New Kit added successfully!");
          alert("New Kit added successfully!");
    
          // Clear input fields
          setName("");
          setDescription("");
          setGradeLevel("");
    
          navigate("/admin");
        } else {
          
          const errorData = await response.json();
          setMessages(
            errorData.status.errors.join(", ") || "Kit creation failed"
          );
        }
      } catch (error) {
        
        setMessages("An error occurred: " + error.message);
        console.log(error.message);
      }
    };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input 
          type="text" 
          className="form-control" 
          value={name} 
          onChange={(e) => setName( e.target.value )} 
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <input 
          type="text" 
          className="form-control" 
          value={description} 
          onChange={(e) => setDescription( e.target.value )} 
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Grade Level</label>
        <input 
          type="text" 
          className="form-control" 
          value={grade_level} 
          onChange={(e) => setGradeLevel( e.target.value )}
          placeholder='YYYY-YYYY'

        />
      </div>
      
      <button type="submit" className="btn btn-primary me-5">Add Kit</button>
      <button className='btn btn-danger'><Link to={"/admin"} style={{ textDecoration: 'none' }}>Cancel</Link></button>
      <div>{messages}</div>
    </form>
  );
};

export default NewKit;