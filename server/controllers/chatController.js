import Chat from "../models/Chat.js";
import createHttpError from "http-errors";

export const insertChat = async (req, res, next) => {
  const { firstPerson, secondPerson } = req.body;

  const chat = await Chat.findOne({ firstPerson, secondPerson });
  if (chat) {
    return res
      .status(200)
      .json({ type: "success", message: "Chat Found", chat });
  }

  const newChat = await Chat.create({ firstPerson, secondPerson });
  await newChat.save();

  return res
    .status(200)
    .json({ type: "success", message: "Chat Created", chat: newChat });
};
