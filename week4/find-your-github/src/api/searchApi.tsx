import axios from "axios";

export const getGitHubProfile = async (userName: string) => {
  try {
    const res = await axios.get(`https://api.github.com/users/${userName}`);
    return res.data;
  } catch (error) {
    return "noUser";
  }
};
