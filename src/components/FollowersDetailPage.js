// src/components/FollowerDetailPage.js
import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { setRepositories } from '../actions/repositoryActions';
import RepositoryList from './RepositoryList';



const FollowerDetailPage = () => {
  const [repoUpdated,setrepoUpdated] = useState(false)
  const { login } = useParams();
  const dispatch = useDispatch();
  const followers = useSelector((state) => state.followers.followers);
  const selectedFollower = useSelector((state) => state.followers.selectedFollower);
  
  const repositories = useSelector((state) => state.repositories);

  const handleRepositoriesClick = () => {
   
    const followerRepositories = repositories.filter((repo) => repo.owner.login === login);
    dispatch(setRepositories(followerRepositories))
    setrepoUpdated(!repoUpdated);
  };

  return (
    <div>
      <h2>{selectedFollower.login}'s Repository</h2>
      
      <p>Followers: {selectedFollower.followers}</p>
      <p>Repositories: {selectedFollower.public_repos}</p>
      <button onClick={handleRepositoriesClick}>View Repositories</button>
      {repoUpdated &&(<RepositoryList/>)}
      <Link to="/followers">Back to Followers List</Link>
    </div>
  );
};

export default FollowerDetailPage;
