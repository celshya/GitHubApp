
import React, { useState } from 'react';
import "../styles/InputForm.css"

const InputForm = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     
      onSearch(username);
    } catch (error) {
      console.error('Error fetching user data', error);
    }
  };

  return (
    <form  onSubmit={handleSubmit}>
      <label>
        GitHub Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <button className='input-btn' type="submit">Search</button>
    </form>
  );
};

export default InputForm;
