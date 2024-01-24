// src/components/FollowerDetailPage.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { setRepositories } from '../actions/repositoryActions';



const FollowerDetailPage = () => {
  const { login } = useParams();
  const followers = useSelector((state) => state.followers.followers);
  const selectedFollower = useSelector((state) => state.followers.selectedFollower);
  const repositories = useSelector((state) => state.repositories);

  const handleRepositoriesClick = () => {
   
    const followerRepositories = repositories.filter((repo) => repo.owner.login === login);
    setRepositories(followerRepositories);
  };

  return (
    <div>
      <h2>{selectedFollower.login}'s Profile</h2>
      
      <p>Followers: {selectedFollower.followers}</p>
      <p>Repositories: {selectedFollower.public_repos}</p>
      <button onClick={handleRepositoriesClick}>View Repositories</button>
      <Link to="/followers">Back to Followers List</Link>
    </div>
  );
};

export default FollowerDetailPage;
