import React from "react";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AddIcon from "@mui/icons-material/Add";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";

const ChatFooter = () => {
  return (
    <div className='flex text-white bg-panelHeaderBackground items-center justify-between w-full py-3 border-l border-thinBorderColor'>
      <EmojiEmotionsIcon className='text-iconColor ml-3' fontSize='small' />
      <AddIcon className='text-iconColor ml-3' fontSize='medium' />
      <input
        type='text'
        className=' bg-inputMessageBackground w-full px-3 ml-3 py-2 placeholder:font-normal rounded-lg placeholder:text-md focus:outline-none text-white '
        placeholder='Type a message'
      />
      <KeyboardVoiceIcon className='text-iconColor mx-4' fontSize='medium' />
    </div>
  );
};

export default ChatFooter;
