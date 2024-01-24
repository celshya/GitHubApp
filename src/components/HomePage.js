import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/HomePage.css';
import InputForm from './InputForm';
import UserInfo from './UserInfo';
import RepositoryList from './RepositoryList';
import { getUserData, getUserRepositories} from '../utils/Api';
import { setRepositories } from '../actions/repositoryActions';

const HomePage = () => {
  const dispatch = useDispatch();
  const repositories = useSelector((state) => state.repositories);

  const [userData, setUserData] = useState(null);
 
  
  const handleSearch = async (username) => {
    try {
      const data = await getUserData(username);
      setUserData(data);

      const repositoriesData = await getUserRepositories(username);
      dispatch(setRepositories(repositoriesData || []));

      
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  return (

      <div className="container">
        <h1>GitHub Repository Viewer</h1>
        <InputForm onSearch={handleSearch} className="input-form" />
        <div className="userRepo">
          {userData && <UserInfo userData={userData} className="user-info" />}
          {repositories.length > 0 && <RepositoryList  className="repository-list" />}
        </div>
        
      </div>
    
  );
};

export default HomePage;
