import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../constants';

const AddItemToKit = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [kit_id, setKitId] = useState('');
  const [image, setImage] = useState(null);
  const [messages, setMessages] = useState('');
  const navigate = useNavigate();
  const kitItemsUrl = `${API_URL}/kit_items_only`;
  const jwt = localStorage.getItem('jwt');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('kit_item[name]', name);
    formData.append('kit_item[description]', description);

    if (image) {
      formData.append('kit_item[image]', image);
    }

    try {
      const response = await fetch(kitItemsUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${jwt}`
        },
        body: formData,
      });

      if (response.ok) {
        const kitItem = await response.json();

        await fetch(`${API_URL}/kits/${kit_id}/kit_items/${kitItem.id}/add_to_kit`, {
          method: 'POST',
        });

        console.log('New Kit Item added successfully!');
        alert('New Kit Item added successfully!');

        setName('');
        setDescription('');
        setKitId('');
        setImage(null);
        
        navigate('/admin');
      } else {
        const errorData = await response.json();
        setMessages(
          errorData.status.errors.join(', ') || 'Kit Item creation failed'
        );
      }
    } catch (error) {
      setMessages('An error occurred: ' + error.message);
      console.log(error.message);
    }
  };

  const handleKitIdChange = (e) => {
    setKitId(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input 
          type="text" 
          className="form-control" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <input 
          type="text" 
          className="form-control" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Kit Id</label>
        <input 
          type="text" 
          className="form-control" 
          value={kit_id} 
          onChange={handleKitIdChange} 
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Image</label>
        <input 
          type="file" 
          className="form-control" 
          onChange={(e) => setImage(e.target.files[0])} 
        />
      </div>
      
      <button type="submit" className="btn btn-primary me-5">Add Kit Item</button>
      <button className="btn btn-danger">
        <Link to="/admin" style={{ textDecoration: 'none' }}>Cancel</Link>
      </button>
      <div>{messages}</div>
    </form>
  );
};

export default AddItemToKit;
