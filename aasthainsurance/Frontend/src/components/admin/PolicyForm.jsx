// src/components/PolicyForm.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const PolicyForm = () => {
  const { type } = useParams();
  const [policy, setPolicy] = useState({ name: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPolicy({ ...policy, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add policy to database logic here
    console.log(`Adding ${type} policy:`, policy);
  };

  return (
    <div>
      <h3>{type.charAt(0).toUpperCase() + type.slice(1)} Policy</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input type="text" name="name" value={policy.name} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Description:
            <input type="text" name="description" value={policy.description} onChange={handleChange} />
          </label>
        </div>
        <button type="submit">Add Policy</button>
      </form>
    </div>
  );
};

export default PolicyForm;
