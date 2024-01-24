import React from 'react';
import { Link } from 'react-router-dom';

const FollowersList = ({ followers }) =>{
      

  return (
    <div>
      <h2>Followers List</h2>
      {followers.length > 0 ? (
        <ul>
          {followers.map((follower) => (
            <li key={follower.id}>
              <Link to={`/`} >
                <strong>{follower.login}</strong>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No followers found.</p>
      )}
    </div>
  );
  
} 
export default FollowersList;
