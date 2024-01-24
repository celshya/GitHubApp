
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSelectedFollower } from '../actions/followerActions';
import UserInfo from './UserInfo';
import "../styles/FollowerList.css"
const FollowersList = () => {
  const dispatch = useDispatch();
  const followers = useSelector((state) => state.followers.followers);
  console.log(followers)
  const handleFollowerClick = (follower) => {
    dispatch(setSelectedFollower(follower));
  };

  return (
    <div className='follower-list-container'>
    <UserInfo/>
       <div className='follower-names'>
      <h2>Followers List</h2>
      <ul>
        {followers.map((follower) => (
          <li key={follower.id}>
            <img src={follower.avatar_url}alt="avatar"/>
            <Link className='follower-link' to={`/followers/${follower.login}`} onClick={() => handleFollowerClick(follower)}>
             {follower.login}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/">Back to Home Page</Link>
    </div>
    </div>
   
  );
};

export default FollowersList;
