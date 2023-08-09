import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";

const ChatHeader = () => {
  return (
    <div className='flex text-white bg-panelHeaderBackground items-center justify-between w-full py-2 px-4 border-l border-thinBorderColor'>
      <div className='flex items-center cursor-pointer'>
        <div className='w-[2.5rem]'>
          <img src='/dp.jpg' alt='DP' className='rounded-full' />
        </div>
        <div className='ml-3'>
          <p>Harshit Patel</p>
        </div>
      </div>

      <div>
        <SearchIcon className='text-iconColor' />
        <MoreVertIcon className='text-iconColor mx-4' />
      </div>
    </div>
  );
};

export default ChatHeader;
