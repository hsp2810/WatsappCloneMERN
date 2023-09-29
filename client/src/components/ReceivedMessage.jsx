import React from "react";
import { getTime } from "../utils/date";

const ReceivedMessage = ({ message }) => {
  return (
    <div className='relative min-w-[5rem] max-w-[80%] py-[10px] pl-[15px] pr-[25px] rounded-b-[10px] rounded-tr-[10px] mb-[10px] bg-receivedMessageBackground text-white self-end'>
      <div className='message-content mb-5'>
        <p className='text-sm'>{message.content}</p>
      </div>
      <p className='absolute bottom-1 right-1 text-white text-xs font-thin'>
        {getTime(message.createdAt)}
      </p>
    </div>
  );
};

export default ReceivedMessage;
