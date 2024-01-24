
const apiUrl = 'https://api.github.com';


export const getUserData = async (username) => {
  try {
    
    const response = await fetch(`${apiUrl}/users/${username}`);
    const res = await response.json()
   
    return res
  } catch (error) {
    console.error('Error fetching user data', error);
    throw error;
  }
};

export const getUserRepositories = async (username) => {
  try {
    const response = await fetch(`${apiUrl}/users/${username}/repos`);
      const res = await response.json()
      return res
  } catch (error) {
    console.error('Error fetching repositories data', error);
    throw error;
  }
};
export const getUserFollowers = async (username) => {
  try {
    const response = await fetch(`${apiUrl}/users/${username}/followers`);
    const followers = await response.json();
    return followers;
  } catch (error) {
    console.error('Error fetching followers data', error);
    throw error;
  }
};