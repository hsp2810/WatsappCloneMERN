import createHttpError from "http-errors";
import Message from "../models/Message.js";
import Chat from "../models/Chat.js";

export const insertMessage = async (req, res, next) => {
  try {
    const { content, to, from } = req.body;
    const message = await Message.create({ content, to, from });

    // Get the chat
    const chat = await Chat.findOne({ firstPerson: to, secondPerson: from });

    return res
      .status(200)
      .json({ type: "success", message: "Message Sent", message });
  } catch (error) {
    next(createHttpError(500, "Error in inserting the message"));
  }
};

//
