import React, { useEffect, useState } from "react";
import ChatBoxItem from "./ChatBoxItem";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../../../api/chats";

const ChatBoxes = ({ socket }) => {
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.auth);
  const { friends } = useSelector((state) => state.auth);
  const { homeUser } = useSelector((state) => state.auth);
  const [chats, setChats] = useState(null);

  useEffect(() => {
    setChats(friends);
  }, [friends, isLogin]);

  const handleSelectChat = async (chatBox) => {
    const response = await addChat({
      firstPerson: homeUser._id,
      secondPerson: chatBox._id,
    });

    if (response && response.status === 200) {
      dispatch({
        type: "selectChat",
        payload: {
          selectedChat: response.data.chat,
        },
      });
      socket.emit("joinchat", response.data.chat, homeUser);
      dispatch({
        type: "setSelectedChatMessages",
        payload: {
          messages: response.data.chat.messages,
        },
      });
    }
  };

  return (
    <>
      <div className='remove-scroll w-full h-[80vh] overflow-y-scroll'>
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
