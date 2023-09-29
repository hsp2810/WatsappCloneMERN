import React, { useEffect, useRef, useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatFooter from "./ChatFooter";
import ChatContent from "./ChatContent";
import { useSelector } from "react-redux";

const Chat = ({ socket }) => {
  const { selectedChat } = useSelector((state) => state.chat);
  const chatContainerRef = useRef(null);
  const { homeUser } = useSelector((state) => state.auth);

  useEffect(() => {
    console.log("Chat is selected");
  }, []);

  return (
    <div className='flex w-full md:w-[70%] flex-col h-screen'>
      {selectedChat ? (
        <>
          <ChatHeader chat={selectedChat.secondPerson} />
          {/* Fetching the chat from redux store */}
          <ChatContent chatContainerRef={chatContainerRef} socket={socket} />
          <ChatFooter chatContainerRef={chatContainerRef} socket={socket} />
        </>
      ) : (
        <DefaultContent />
      )}
    </div>
  );
};

const DefaultContent = () => {
  return (
    <div className='flex h-full items-center justify-center flex-col text-iconLighterColor bg-panelHeaderBackground'>
      <h1 className='text-3xl text-white font-thin'>WhatsApp Web</h1>
      <p className='my-2 font-thin'>
        Send and receive messages without keeping your phone online.
      </p>
      <p className='font-thin'>
        Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
      </p>
    </div>
  );
};

export default Chat;
