import api from "../config/axios";


// === GET routes === //

export const getAccount = async () => {
  try {
    const res = await api.get('https://api.github.com/users/github');
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
