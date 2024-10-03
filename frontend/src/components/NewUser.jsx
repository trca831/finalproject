import React, { useState } from 'react';

const NewUser = () => {
  const [userData, setUserData] = useState({ name: '', email: '', password: '', role: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log('New User:', userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input 
          type="text" 
          className="form-control" 
          value={userData.name} 
          onChange={(e) => setUserData({ ...userData, name: e.target.value })} 
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input 
          type="email" 
          className="form-control" 
          value={userData.email} 
          onChange={(e) => setUserData({ ...userData, email: e.target.value })} 
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input 
          type="password" 
          className="form-control" 
          value={userData.password} 
          onChange={(e) => setUserData({ ...userData, password: e.target.value })} 
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Role</label>
        <input 
          type="text" 
          className="form-control" 
          value={userData.role} 
          onChange={(e) => setUserData({ ...userData, role: e.target.value })} 
        />
      </div>
      <button type="submit" className="btn btn-primary">Add User</button>
    </form>
  );
};

export default NewUser;
