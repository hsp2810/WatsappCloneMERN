import React, { useState } from "react";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import DataSaverOffIcon from "@mui/icons-material/DataSaverOff";
import MessageIcon from "@mui/icons-material/Message";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatBoxSearch from "./Chats/ChatBoxSearch";
import FilterListIcon from "@mui/icons-material/FilterList";
import ChatBoxes from "./Chats/ChatBoxes";
import ProfileDrawer from "./Profile/ProfileDrawer";

const MainSidebar = ({ openProfileDrawer, setProfileDrawer, toggleDrawer }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenuBar = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <ProfileDrawer
        openProfileDrawer={openProfileDrawer}
        setProfileDrawer={setProfileDrawer}
        toggleDrawer={toggleDrawer}
      />
      <div className='flex w-[30%] flex-col'>
        <div className='flex bg-panelHeaderBackground items-center justify-between w-full py-2 px-4'>
          <div className='w-[2.5rem] cursor-pointer' onClick={setProfileDrawer}>
            <img src='/dp.jpg' alt='DP' className='rounded-full' />
          </div>
          <div className='relative'>
            <Diversity3Icon className='text-iconColor mx-3' />
            <DataSaverOffIcon className='text-iconColor mx-3' />
            <MessageIcon className='text-iconColor mx-3' />
            <MoreVertIcon
              className='text-iconColor mx-3'
              onClick={toggleMenuBar}
            />
            {isMenuOpen && (
              <div className='text-white bg-panelHeaderBackground w-[12rem] h-fit py-1 left-[1rem] absolute z-20 rounded-md shadow-md transition opacity-100'>
                <ul className='w-full'>
                  <li className='mt-4 font-normal p-3 pl-6 text-sm cursor-pointer hover:bg-appBackground'>
                    New group
                  </li>
                  <li className='my-2 font-normal p-3 pl-6 text-sm cursor-pointer hover:bg-appBackground'>
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className='flex my-2 px-3 w-full items-center'>
          <ChatBoxSearch />
          <FilterListIcon
            className='text-iconLighterColor ml-2'
            fontSize='small'
          />
        </div>
        <div className='w-full'>
          <ChatBoxes />
        </div>
      </div>
    </>
  );
};

export default MainSidebar;
