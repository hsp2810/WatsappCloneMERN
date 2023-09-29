import axios from "axios";

const URL = "http://localhost:5000/api/chats";

export const addChat = async (chatObject) => {
  try {
    const response = await axios.post(`${URL}/insert`, chatObject, {
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
