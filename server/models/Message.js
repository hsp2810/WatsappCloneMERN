import mongoose from "mongoose";

const messageSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },

    chat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chat",
    },

    to: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    from: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    sendTime: {
      type: String,
    },

    seenTime: {
      type: String,
    },
  },
  { timestamps: true }
);

mongoose.models = {};
export default mongoose.model("messages", messageSchema);
