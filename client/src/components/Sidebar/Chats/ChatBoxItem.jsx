import React from "react";
import { useSelector } from "react-redux";

const ChatItem = ({ chatBox, handleSelectChat }) => {
  const { selectedChat } = useSelector((state) => state.chat);

  return (
    <>
      <div
        className={`${
          selectedChat === chatBox.id
            ? "bg-inputMessageBackground"
            : "bg-inherit"
        } flex text-white items-center w-full relative p-3 ${
          selectedChat === chatBox.id
            ? "hover:bg-inputMessageBackground"
            : "hover:bg-panelHeaderBackground"
        } cursor-pointer border-b border-thinBorderColor`}
        onClick={() => handleSelectChat(chatBox)}
      >
        <div className='w-[3rem]'>
          <img src='/dp.jpg' alt='DP' className='rounded-full' />
        </div>
        <div className='flex flex-col ml-4 '>
          <p className='text-md'>{chatBox.name}</p>
          <p className='font-light text-sm'>Ohk makes sense</p>
        </div>
        <div className='absolute top-5 right-5'>
          <p className='text-xs text-iconColor'>1:06 A.M.</p>
        </div>
      </div>
    </>
  );
};

export default ChatItem;
