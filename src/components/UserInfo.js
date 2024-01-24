
import React from 'react';
import '../styles/UserInfo.css';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setFollowers } from '../actions/followerActions';
import { getUserFollowers } from '../utils/Api';
import { useSelector } from 'react-redux';

const UserInfo = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.userData);
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
      <button className="button"onClick={handleFollowersClick}>Followers: {userData.followers}</button>
      <p>{userData.bio}</p>
      <p>{userData.location}</p>
      <a href='#'>Twitter: {userData.twitter_username}</a>
    </div>
  </div>
);

}
export default UserInfo;
