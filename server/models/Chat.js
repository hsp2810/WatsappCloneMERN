//Message: from, to, sentTime, receivedTime, content

// Chat: array of messages, name,

import mongoose from "mongoose";

const chatSchema = mongoose.Schema({
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
  ],

  firstPerson: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },

  secondPerson: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },

  latestMessage: {
    messageType: {
      type: String,
    },
    message: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
  },
});

mongoose.models = {};
export default mongoose.model("chats", chatSchema);
