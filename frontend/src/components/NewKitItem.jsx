import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../constants';

const NewKitItem = () => {
  const [ItemData, setItemData] = useState('');
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
 
  const [messages, setMessages] = useState('');
  const navigate = useNavigate();
  const kitItemUrl = `${API_URL}/kit_items_only`
  const jwt = localStorage.getItem('jwt');

  const handleSubmit = async (e) => {
    e.preventDefault();
       
      const updatedKitData = {
          kit_item: {
            name,
          description,
          }
      };
    
      try {
        // Send POST request to registration endpoint
        const response = await fetch(kitItemUrl, {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${jwt}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedKitData),
        });
    
        if (response.ok) {
          
          console.log("New Kit Item added successfully!");
          alert("New Kit Item added successfully!");
    
          // Clear input fields
          setName("");
          setDescription("");
              
          navigate("/admin");
        } else {
          
          const errorData = await response.json();
          setMessages(
            errorData.status.errors.join(", ") || "Kit Item creation failed"
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
      
      
      <button type="submit" className="btn btn-primary me-5">Add Kit Item</button>
      <button className='btn btn-danger'><Link to={"/admin"} style={{ textDecoration: 'none' }}>Cancel</Link></button>
      <div>{messages}</div>
    </form>
  );
};

export default NewKitItem;