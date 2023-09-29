import axios from "axios";

const URL = "http://localhost:5000/api/messages";

export const sendMessage = async (messageObject) => {
  try {
    const response = await axios.post(`${URL}/insert`, messageObject, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return response;
  } catch (error) {
    return error;
  }
};
