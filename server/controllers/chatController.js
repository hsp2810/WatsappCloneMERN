import Chat from "../models/Chat.js";
import Message from "../models/Message.js";
import User from "../models/User.js";

export const insertChat = async (req, res, next) => {
  try {
    const { firstPerson, secondPerson } = req.body;

    const chat = await Chat.findOne({
      $or: [
        { firstPerson, secondPerson },
        { firstPerson: secondPerson, secondPerson: firstPerson },
      ],
    });
    if (chat) {
      const secondPersonObj = await User.findById(secondPerson);
      console.log(secondPersonObj);
      const messages = await populateMessages(chat, secondPersonObj);

      const updatedChat = {
        ...chat._doc,
        messages,
        secondPerson: secondPersonObj,
      };

      return res
        .status(200)
        .json({ type: "success", message: "Chat Found", chat: updatedChat });
    }

    const newChat = await Chat.create({ firstPerson, secondPerson });
    await newChat.save();

    return res
      .status(200)
      .json({ type: "success", message: "Chat Created", chat: newChat });
  } catch (error) {
    console.log(error);
  }
};

const populateMessages = async (chat, user) => {
  const messages = await Promise.all(
    chat.messages.map(async (messageId) => {
      const message = await Message.findById(messageId);
      let messageType = "";
      if (message.from.toString() === user._id.toString()) {
        messageType = "received";
      } else {
        messageType = "sent";
      }
      return { ...message._doc, type: messageType };
    })
  );
  return messages;
};
