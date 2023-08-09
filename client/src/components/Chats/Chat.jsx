import React from "react";
import ChatHeader from "./ChatHeader";
import ChatFooter from "./ChatFooter";
import ChatContent from "./ChatContent";

const Chat = () => {
  return (
    <div className='flex w-[70%] flex-col'>
      <ChatHeader />
      <ChatContent />
      <ChatFooter />
    </div>
  );
};

export default Chat;
