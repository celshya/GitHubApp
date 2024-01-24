import React, { useState, useEffect } from 'react';
import FollowersList from './FollowersList'; 
import { getUserFollowers } from '../utils/Api';
import { useParams } from 'react-router-dom';

const FollowersPage = () => {
  const [followers, setFollowers] = useState([]);
  const { username } = useParams(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const followersData = await getUserFollowers(username);
        setFollowers(followersData);
      } catch (error) {
        console.error('Error fetching followers data', error);
      }
    };

    fetchData();
  }, [username]);

  return (
    <div>
      <h2>Followers Page</h2>
      <FollowersList followers={followers} /> 
    </div>
  );
};

export default FollowersPage;
