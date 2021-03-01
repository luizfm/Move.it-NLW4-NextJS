import axios from 'axios';

export const getGithubUserInfo = async (username) => {
    return (await axios.get(`https://api.github.com/users/${username}`)).data
  };