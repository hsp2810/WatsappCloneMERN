import React from "react";
import SentMessage from "../SentMessage";
import ReceivedMessage from "../ReceivesMessage";

const ChatContent = () => {
  return (
    <div className='border-l border-thinBorderColor h-[82vh] overflow-x-scroll flex flex-col p-10'>
      <div className='flex justify-start'>
        <ReceivedMessage />
      </div>
      <div className='flex justify-end'>
        <SentMessage />
      </div>
      <div className='flex justify-start'>
        <ReceivedMessage />
      </div>
      <div className='flex justify-end'>
        <SentMessage />
      </div>
      <div className='flex justify-start'>
        <ReceivedMessage />
      </div>
      <div className='flex justify-end'>
        <SentMessage />
      </div>
      <div className='flex justify-start'>
        <ReceivedMessage />
      </div>
      <div className='flex justify-end'>
        <SentMessage />
      </div>
      <div className='flex justify-start'>
        <ReceivedMessage />
      </div>
      <div className='flex justify-end'>
        <SentMessage />
      </div>
      <div className='flex justify-start'>
        <ReceivedMessage />
      </div>
      <div className='flex justify-end'>
        <SentMessage />
      </div>
      <div className='flex justify-start'>
        <ReceivedMessage />
      </div>
      <div className='flex justify-end'>
        <SentMessage />
      </div>
      <div className='flex justify-start'>
        <ReceivedMessage />
      </div>
      <div className='flex justify-end'>
        <SentMessage />
      </div>
      <div className='flex justify-start'>
        <ReceivedMessage />
      </div>
      <div className='flex justify-end'>
        <SentMessage />
      </div>
      <div className='flex justify-start'>
        <ReceivedMessage />
      </div>
      <div className='flex justify-end'>
        <SentMessage />
      </div>
      <div className='flex justify-start'>
        <ReceivedMessage />
      </div>
      <div className='flex justify-end'>
        <SentMessage />
      </div>
      <div className='flex justify-start'>
        <ReceivedMessage />
      </div>
      <div className='flex justify-end'>
        <SentMessage />
      </div>
    </div>
  );
};

export default ChatContent;
