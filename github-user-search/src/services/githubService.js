import axios from 'axios';
/*
export const AxiosSearch = async (username) => {
    const datas = await fetch(`https://api.github.com/users/${username}`);
    const response = await datas.json();
    return response;
} 
    
export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  console.log(response)
  return response.data;
};
*/

const GITHUB_API_URL = 'https://api.github.com/search/users?q=';

export const fetchUserData = async (username, location, minRepos) => {
  const query = [];
  if (username) query.push(`${username}`);
  if (location) query.push(`location:${location}`);
  if (minRepos) query.push(`repos:>=${minRepos}`);

  const response = await axios.get(`${GITHUB_API_URL}${query.join('+')}`);
  return response.data.items;
};
