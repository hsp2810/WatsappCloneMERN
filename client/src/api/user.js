import axios from "axios";

const URL = "http://localhost:5000/api/users";

export const authenticate = async () => {
  try {
    const response = await axios.get(`${URL}/authenticate`, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const login = async (user) => {
  try {
    const response = await axios.post(`${URL}/login`, user, {
      headers: {
        "Content-type": "application/json",
      },

      withCredentials: true,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const logout = async () => {
  try {
    const response = await axios.get(`${URL}/logout`, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const fetchAllExLoginUser = async () => {
  try {
    const response = await axios.get(`${URL}/all`, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
