import { IconButton, Drawer } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import DoneIcon from "@mui/icons-material/Done";
import CreateIcon from "@mui/icons-material/Create";
import { useState } from "react";

const drawerStyle = {
  width: "30%",
  background: "#111b21",
  color: "white",
};

const defUser = {
  name: "Harshit Patel",
  about:
    "People who have firsthand experience can teach you better than those who only have theoretical knowledge.",
};

const ProfileDrawer = ({ openProfileDrawer, toggleDrawer }) => {
  const [userProfile, setUserProfile] = useState(defUser);
  const [isNameEditable, setNameEditable] = useState(false);
  const [isAboutEditable, setAboutEditable] = useState(false);

  const handleChange = (e) => {
    setUserProfile({ ...userProfile, [e.target.name]: e.target.value });
  };

  const toggleNameEdit = () => {
    setNameEditable(!isNameEditable);
  };

  const toggleAboutEdit = () => {
    setAboutEditable(!isAboutEditable);
  };

  return (
    <Drawer
      variant='persistent'
      open={openProfileDrawer}
      onClose={toggleDrawer}
      PaperProps={{ style: drawerStyle }}
    >
      <div className='flex bg-panelHeaderBackground h-[7em] items-end pb-3'>
        <WestIcon className='ml-5 cursor-pointer' onClick={toggleDrawer} />
        <h1 className='text-lg ml-5'>Profile</h1>
      </div>
      <div className='flex items-center flex-col mt-8'>
        <div className='w-[12rem] bg-inherit'>
          <img src='/dp.jpg' alt='DP' className='rounded-full' />
        </div>
        <form className='w-[80%] mt-10'>
          <div className='w-full'>
            <label
              htmlFor='name'
              className='text-sm text-tealColor font-normal'
            >
              Your name
            </label>
            <div
              className={`${isNameEditable && "border-b border-b-tealColor"}`}
            >
              <input
                className='bg-inherit outline-none w-[90%] mt-4 pb-2'
                type='text'
                value={userProfile.name}
                name='name'
                onChange={handleChange}
                disabled={!isNameEditable}
              />
              {isNameEditable ? (
                <DoneIcon className='text-iconColor' onClick={toggleNameEdit} />
              ) : (
                <CreateIcon
                  className='text-iconColor'
                  onClick={toggleNameEdit}
                />
              )}
            </div>
          </div>
          <div className='w-full mt-10'>
            <label
              htmlFor='name'
              className='text-sm text-tealColor font-normal'
            >
              About
            </label>
            <div
              className={`${isAboutEditable && "border-b border-b-tealColor"}`}
            >
              <textarea
                className='bg-inherit outline-none w-[90%] mt-4 pb-2 overflow-x-hidden resize-none'
                type='text'
                value={userProfile.about}
                name='about'
                onChange={handleChange}
                disabled={!isAboutEditable}
                rows={1}
                wrap='soft'
              />
              {isAboutEditable ? (
                <DoneIcon
                  className='text-iconColor'
                  onClick={toggleAboutEdit}
                />
              ) : (
                <CreateIcon
                  className='text-iconColor'
                  onClick={toggleAboutEdit}
                />
              )}
            </div>
          </div>
        </form>
      </div>
    </Drawer>
  );
};

export default ProfileDrawer;
//   <div>
//     <label htmlFor='about'></label>
//     <input
//       className='bg-inherit'
//       type='text'
//       value={userProfile.about}
//       name='about'
//     />
//   </div>
