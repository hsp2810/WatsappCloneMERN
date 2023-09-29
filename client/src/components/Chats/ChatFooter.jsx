import React, { useEffect, useState } from "react";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AddIcon from "@mui/icons-material/Add";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../../api/message";
import { addChat } from "../../api/chats";

const ChatFooter = ({ chatContainerRef, socket }) => {
  const { homeUser } = useSelector((state) => state.auth);
  const { selectedChat, chatMessages } = useSelector((state) => state.chat);
  const [messageText, setMessageText] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [chatMessages]);

  const handleSendMessage = useCallback(async (e) => {
    if (e.keyCode === 13 && messageText) {
      const response = await sendMessage({
        from: homeUser._id,
        to: selectedChat.secondPerson._id,
        content: messageText,
      });

      // Fetch the chat content
      if (response && response.status === 200) {
        socket.emit("send_message", selectedChat, response.data.message);
        console.log(response.data.message.content, " was sent");
        const res = await addChat({
          firstPerson: homeUser._id,
          secondPerson: selectedChat.secondPerson._id,
        });

        if (res && res.status === 200) {
          dispatch({
            type: "setSelectedChatMessages",
            payload: {
              messages: res.data.chat.messages,
            },
          });
          setMessageText("");
        }
      }
    }
  }, []);

  return (
    <div className='flex text-white bg-panelHeaderBackground items-center justify-between w-full py-3 border-l border-thinBorderColor'>
      <EmojiEmotionsIcon className='text-iconColor ml-3' fontSize='small' />
      <AddIcon className='text-iconColor ml-3' fontSize='medium' />
      <input
        type='text'
        className=' bg-inputMessageBackground w-full px-3 ml-3 py-2 placeholder:font-normal rounded-lg placeholder:text-md focus:outline-none text-white '
        placeholder='Type a message'
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
        onKeyUp={handleSendMessage}
      />
      <KeyboardVoiceIcon className='text-iconColor mx-4' fontSize='medium' />
    </div>
  );
};

export default ChatFooter;
