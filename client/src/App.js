import MainSidebar from "./components/Sidebar/MainSidebar";
import "./App.css";
import Chat from "./components/Chats/Chat";
import { useState } from "react";

function App() {
  const [openProfileDrawer, setProfileDrawer] = useState(false);

  const toggleDrawer = () => {
    setProfileDrawer(!openProfileDrawer);
  };

  return (
    <>
      <div className='flex bg-appBackground h-screen'>
        <MainSidebar
          openProfileDrawer={openProfileDrawer}
          setProfileDrawer={setProfileDrawer}
          toggleDrawer={toggleDrawer}
        />
        <Chat />
      </div>
    </>
  );
}

export default App;
