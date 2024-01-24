
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/RepositoryList.css'; 

const RepositoryList = () => {
  const repositories = useSelector((state) => state.repositories);
 
  return (
    <div>
      <p>Repositories</p>
      {repositories.length > 0 ? (
        <ul>
          {repositories.map((repo) => (
            <li key={repo.id}>
            <img src={repo.owner.avatar_url} alt="avatar"/>
            <div>
            <Link className="repo-link" to={`/repository/${repo.id}`}>
                <strong>{repo.name}</strong>
              </Link>
              <p>{repo.description}</p></div>
              
            </li>
          ))}
        </ul>
      ) : (
        <p>No repositories found.</p>
      )}
    </div>
  );
};

export default RepositoryList;
