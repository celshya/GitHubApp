
import React from 'react';
import { Link } from 'react-router-dom';

const RepositoryList = ({ repositories }) => {
  
  return (
    <div>
      <h2>Repositories</h2>
      {repositories.length > 0 ? (
        <ul>
          {repositories.map((repo) => (
            <li key={repo.id}>
              <Link to={`/repository/${repo.id}`}>
                <strong>{repo.name}</strong>
              </Link>
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
