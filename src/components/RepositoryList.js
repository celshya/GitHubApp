
import React from 'react';

const RepositoryList = ({ repositories }) => {
  return (
    <div>
      <h2>Repositories</h2>
      {repositories.length > 0 ? (
        <ul>
          {repositories.map((repo) => (
            <li key={repo.id}>
              <strong>{repo.name}</strong>: {repo.description}
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
