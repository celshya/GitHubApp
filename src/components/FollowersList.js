import React from 'react';
import { SlArrowLeftCircle } from 'react-icons/sl';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setSelectedFollower } from '../actions/followerActions';
import { setRepositories } from '../actions/repositoryActions';
import { setUserData } from '../actions/userActions';
import UserInfo from './UserInfo';
import { getUserData, getUserRepositories } from '../utils/Api';
import '../styles/FollowerList.css';

const FollowersList = () => {
  const dispatch = useDispatch();
  const followers = useSelector((state) => state.followers.followers);
  const navigate = useNavigate();
 

  const handleFollowerClick = async (follower) => {
    try {
      
      dispatch(setSelectedFollower(follower));

     
      const followerUserData = await getUserData(follower.login);
      const followerRepositoriesData = await getUserRepositories(follower.login);

      
      dispatch(setUserData(followerUserData));
      dispatch(setRepositories(followerRepositoriesData || []));

      
      navigate('/');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="follower-list-container">
      <Link to="/">
        <SlArrowLeftCircle size={30} />
      </Link>
      <UserInfo />
      <div className="follower-names">
        <p>Followers</p>
        <ul>
          {followers.map((follower) => (
            <li className='follower-list' key={follower.id}>
              
              <img src={follower.avatar_url} alt="avatar" />
              <Link
                className="follower-link"
                to={`/`}
                onClick={() => handleFollowerClick(follower)}
              >
                {follower.login}
              </Link>
              <button className='btn-follow'>follow</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FollowersList;
