import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const ChatBoxSearch = () => {
  return (
    <div className='flex w-full items-center px-3 rounded-lg bg-panelHeaderBackground'>
      <SearchIcon className='text-iconLighterColor' fontSize='small' />
      <input
        type='text'
        className='pl-8 bg-panelHeaderBackground pr-3 py-[5px] placeholder:font-normal placeholder:text-sm focus:outline-none text-white '
        placeholder='Search or start new chat'
      />
    </div>
  );
};

export default ChatBoxSearch;
