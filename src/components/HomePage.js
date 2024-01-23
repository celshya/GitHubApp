
import React, {  useState } from 'react';
import '../styles/HomePage.css';
import InputForm from './InputForm';
import UserInfo from './UserInfo';
import RepositoryList from './RepositoryList';
import { getUserData,getUserRepositories } from '../utils/Api';

const HomePage = () => {
  const [userData, setUserData] = useState(null);
  const [repositories, setRepositories] = useState([]);

  const handleSearch = async (username) => {
    try {
      const data = await getUserData(username);
      setUserData(data);

      const repositoriesData = await getUserRepositories(username);
      setRepositories(repositoriesData);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  return (
    <div className="container">
      <h1>GitHub Repository Viewer</h1>
      <InputForm onSearch={handleSearch}  className="input-form"/>
      <div className='userRepo'>
      {userData && <UserInfo userData={userData}  className="user-info"/>}
      {repositories.length > 0 && <RepositoryList repositories={repositories}  className="repository-list" />}
      </div>
    </div>
  );
};

export default HomePage;
