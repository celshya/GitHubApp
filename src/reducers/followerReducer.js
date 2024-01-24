
const followerReducer = (state = { followers: [], selectedFollower: null }, action) => {
    switch (action.type) {
      case 'SET_FOLLOWERS':
        return { ...state, followers: action.payload };
      case 'SET_SELECTED_FOLLOWER':
        return { ...state, selectedFollower: action.payload };
      default:
        return state;
    }
  };
  
  export default followerReducer;
  