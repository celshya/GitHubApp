import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/HomePage.css';
import InputForm from './InputForm';
import UserInfo from './UserInfo';
import RepositoryList from './RepositoryList';
import { getUserData, getUserRepositories} from '../utils/Api';
import { setRepositories } from '../actions/repositoryActions';
import { setUserData } from '../actions/userActions';

const HomePage = () => {
  const dispatch = useDispatch();
  const repositories = useSelector((state) => state.repositories);
  const userData = useSelector((state) => state.userData);

  
 
  
  const handleSearch = async (username) => {
    try {
      const data = await getUserData(username);
      dispatch(setUserData(data));

      const repositoriesData = await getUserRepositories(username);
      dispatch(setRepositories(repositoriesData || []));

      
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  return (

      <div className="container">
        <InputForm onSearch={handleSearch} className="input-form" />
        <div className="userRepo">
          {userData && <UserInfo  className="user-info" />}
          {repositories.length > 0 && <RepositoryList  className="repository-list" />}
        </div>
        
      </div>
    
  );
};

export default HomePage;
