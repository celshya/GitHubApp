// src/components/UserInfo.js
import React from 'react';
import "../styles/UserInfo.css"
const UserInfo = ({ userData }) => (
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
    <a href='#'><p>Followers: {userData.followers}</p></a>
    <p>{userData.bio}</p>
    
   
    <p>Twitter: {userData.twitter_username}</p>
    </div>
  </div>
);

export default UserInfo;
