import React, { useState } from "react";
import ChatBoxItem from "./ChatBoxItem";
import { useDispatch } from "react-redux";

const ChatBoxes = () => {
  const dispatch = useDispatch();
  const [chats, setChats] = useState([
    { id: "1", name: "Harshit Patel" },
    { id: "2", name: "Manish Patel" },
    { id: "3", name: "Shrey Patel" },
    { id: "4", name: "Mohan Patel" },
    { id: "4", name: "Mohan Patel" },
    { id: "4", name: "Mohan Patel" },
    { id: "4", name: "Mohan Patel" },
    { id: "4", name: "Mohan Patel" },
    { id: "4", name: "Mohan Patel" },
    { id: "4", name: "Mohan Patel" },
    { id: "4", name: "Mohan Patel" },
    { id: "4", name: "Mohan Patel" },
    { id: "4", name: "Mohan Patel" },
    { id: "4", name: "Mohan Patel" },
    { id: "4", name: "Mohan Patel" },
  ]);

  const handleSelectChat = (chatBox) => {
    dispatch({
      type: "selectChat",
      payload: {
        selectedChat: chatBox.id,
      },
    });
  };

  return (
    <>
      <div className='w-full h-[80vh] overflow-x-scroll'>
        {chats &&
          chats.map((chatBox, index) => {
            return (
              <ChatBoxItem
                key={index}
                chatBox={chatBox}
                handleSelectChat={handleSelectChat}
              />
            );
          })}
      </div>
    </>
  );
};

export default ChatBoxes;
