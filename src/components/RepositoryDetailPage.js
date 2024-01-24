
import React from 'react';
import { useSelector } from 'react-redux';
import RepositoryDetail from './RepositoryDetail';

const RepositoryDetailPage = () => {
  const repositories = useSelector((state) => state.repositories);
  const repo = repositories.length > 0 ? repositories : null;

  return (
    <div>
    
      {repo ? (
        <RepositoryDetail repo={repo} />
      ) : (
        <p>No repositories available.</p>
      )}
    </div>
  );
};

export default RepositoryDetailPage;
