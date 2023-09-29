import React, { useEffect } from "react";
import SentMessage from "../SentMessage";
import ReceivedMessage from "../ReceivedMessage";
import { useDispatch, useSelector } from "react-redux";

const ChatContent = ({ chatContainerRef, socket }) => {
  const { chatMessages, selectedChat } = useSelector((state) => state.chat);
  const { homeUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Setting the latest message in the client");
    socket.on("receive_message", ({ chat, message }) => {
      console.log("Second Person: ", chat.secondPerson.name);
      console.log("Login User: ", homeUser.name);
      // if (
      //   selectedChat &&
      //   chat.secondPerson._id.toString() === homeUser._id.toString()
      // ) {
      // }
      console.log(message);
      // dispatch({
      //   type: "updateChatMessages",
      //   payload: {
      //     receivedMessage: message,
      //   },
      // });
    });
  }, []);

  return (
    <>
      <div
        className='remove-scroll border-l border-thinBorderColor h-[82vh] overflow-y-scroll flex flex-col p-10'
        ref={chatContainerRef}
      >
        {!chatMessages ? (
          <p className='text-white'>No Chat found</p>
        ) : (
          chatMessages.map((message) => {
            return (
              <div key={message._id}>
                {message.type === "sent" ? (
                  <div className='flex justify-end'>
                    <SentMessage message={message} />
                  </div>
                ) : (
                  <div className='flex justify-start'>
                    <ReceivedMessage message={message} />
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default ChatContent;
