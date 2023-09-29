import createHttpError from "http-errors";
import Message from "../models/Message.js";
import Chat from "../models/Chat.js";

export const insertMessage = async (req, res, next) => {
  try {
    const { content, to, from } = req.body;
    const message = await Message.create({ content, to, from });

    const chat = await Chat.findOne({
      $or: [
        { firstPerson: from, secondPerson: to },
        { firstPerson: to, secondPerson: from },
      ],
    });
    if (!chat) {
      next(
        createHttpError(
          402,
          "Chat not found. Chat must be created to send a message"
        )
      );
    }

    const count = chat.messages.push(message);
    chat.latestMessage = message;
    await chat.save();

    if (count === 0) {
      next(createHttpError(402, "Message was not able to insert to the chat"));
    }
    return res
      .status(200)
      .json({ type: "success", message: "Message Sent", message, chat });
  } catch (error) {
    console.log(error);
    next(createHttpError(500, "Error in inserting the message"));
  }
};

export const getMessageById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const message = await Message.findById(id);
    if (!message) {
      next(createHttpError(402, "No message found based on the ID"));
    }

    return res
      .status(200)
      .json({ type: "success", message: "Message Found", message });
  } catch (error) {
    next(createHttpError(500, "Error in inserting the message"));
  }
};
