
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/UserInfo.css';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setFollowers, setSelectedFollower } from '../actions/followerActions';
import { getUserFollowers } from '../utils/Api';


const UserInfo = ({ userData}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleFollowersClick = async () => {
   
    try {
      const followersData = await getUserFollowers(userData.login);
      
      
      dispatch(setFollowers(followersData || []));
      navigate('/followers');
    } catch (error) {
      console.error('Error fetching followers:', error);
    }
  };

return (
  <div className="user-info-container">
    <h2>User Profile</h2>
    <div className="avatar-container">
      <img
        src={userData.avatar_url}
        width="100"
        height="100"
        alt="avatar"
        className="avatar"
      />
    </div>
    <div className='user-details'>
      <p>{userData.name}</p>
      <button onClick={handleFollowersClick}>Followers: {userData.followers}</button>
      <p>{userData.bio}</p>
      <p>Twitter: {userData.twitter_username}</p>
    </div>
  </div>
);

}
export default UserInfo;
