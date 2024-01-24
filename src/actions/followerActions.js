// src/actions/followerActions.js
export const setFollowers = (followers) => ({
    type: 'SET_FOLLOWERS',
    payload: followers,
  });
  
  export const setSelectedFollower = (follower) => ({
    type: 'SET_SELECTED_FOLLOWER',
    payload: follower,
  });
  