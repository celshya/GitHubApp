
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSelectedFollower } from '../actions/followerActions';

const FollowersList = () => {
  const dispatch = useDispatch();
  const followers = useSelector((state) => state.followers.followers);

  const handleFollowerClick = (follower) => {
    dispatch(setSelectedFollower(follower));
  };

  return (
    <div>
      <h2>Followers List</h2>
      <ul>
        {followers.map((follower) => (
          <li key={follower.id}>
            <Link to={`/followers/${follower.login}`} onClick={() => handleFollowerClick(follower)}>
              {follower.login}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/">Back to Home Page</Link>
    </div>
  );
};

export default FollowersList;
