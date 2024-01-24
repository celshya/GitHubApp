
import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { setRepositories } from '../actions/repositoryActions';
import RepositoryList from './RepositoryList';
import { SlArrowLeftCircle } from 'react-icons/sl';


const FollowerDetailPage = () => {

  const [repoUpdated,setrepoUpdated] = useState(false)
  const { login } = useParams();
  const dispatch = useDispatch();
  
  const selectedFollower = useSelector((state) => state.followers.selectedFollower);
  const repositories = useSelector((state) => state.repositories);

  const handleRepositoriesClick = () => {
   
    const followerRepositories = repositories.filter((repo) => repo.owner.login === login);
    dispatch(setRepositories(followerRepositories))
    setrepoUpdated(!repoUpdated);
  };

  return (
    <div>
    <Link to="/"><SlArrowLeftCircle size={30} /></Link>
      <h2>{selectedFollower.login}'s Repository</h2>
      
      <p>Followers: {selectedFollower.followers}</p>
      <p>Repositories: {selectedFollower.public_repos}</p>
      <button onClick={handleRepositoriesClick}>View Repositories</button>
      {repoUpdated &&(<RepositoryList/>)}
    
    </div>
  );
};

export default FollowerDetailPage;
