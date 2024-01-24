
import React from 'react';
import { useParams } from 'react-router-dom';

const RepositoryDetail = ({ repo }) => {
  console.log(repo)
  const { id } = useParams();
  const repository = repo.find((repo) => repo.id === parseInt(id, 10));

  if (!repository) {
    return <p>Repository not found.</p>;
  }

  return (
    <div>
    
      <h2>{repository.name}</h2>
      <p>{repository.description}</p>
     
    </div>
  );
};

export default RepositoryDetail;
