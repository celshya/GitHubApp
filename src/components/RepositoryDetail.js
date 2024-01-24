
import React from 'react';
import { useParams } from 'react-router-dom';
import "../styles/RepositoryDetail.css"
const RepositoryDetail = ({ repo }) => {
  
  const { id } = useParams();
  const repository = repo.find((repo) => repo.id === parseInt(id, 10));
  console.log(repository)
  if (!repository) {
    return <p>Repository not found.</p>;
  }

  return (
    <div className='page-container'>
      <div className='profile-container'>
      <div className='avatar-container'> <img src={repository.owner.avatar_url} alt="Avatar" className='avatar'/></div>
       
        <h7>Verified by GitHub</h7>
        <p>GitHub confirms that this app meets the requirements for verification.</p>
        <p>Categories</p>
    
      
      </div>
      <div className='content-container'>
        <p>Application</p>
        <h2>{repository.name}</h2>
        <button aria-label="Click me">Set up a Plan</button>
        <p>{repository.description}</p>
      </div>
    </div>
  );
};

export default RepositoryDetail;
