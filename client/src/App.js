import MainSidebar from "./components/Sidebar/MainSidebar";
import Chat from "./components/Chats/Chat";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "./components/Authentication/Login";
import { authenticate, fetchAllExLoginUser } from "./api/user";
import { io } from "socket.io-client";

function App() {
  const { isLogin, homeUser } = useSelector((state) => state.auth);
  const socket = useRef();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const auth = async () => {
  //     if (!homeUser) {
  //       const response = await authenticate();
  //       if (response && response.status === 200) {
  //         dispatch({
  //           type: "authSuccess",
  //           payload: response.data.user,
  //         });

  //         //Connect to socket
  //         socket.current = io("http://localhost:8080");
  //         socket.current.emit("setup", response.data.user);

  //         const res = await fetchAllExLoginUser();
  //         if (res && res.status === 200) {
  //           dispatch({
  //             type: "fetchFriendsSuccess",
  //             payload: res.data.users,
  //           });
  //         }
  //       }
  //     }
  //   };
  //   auth();
  // }, []);

  const [openProfileDrawer, setProfileDrawer] = useState(false);

  const toggleDrawer = () => {
    setProfileDrawer(!openProfileDrawer);
  };

  return (
    <>
      <div className='bg-appBackground h-screen'>
        {isLogin ? (
          <div className='flex'>
            <MainSidebar
              openProfileDrawer={openProfileDrawer}
              setProfileDrawer={setProfileDrawer}
              toggleDrawer={toggleDrawer}
              socket={socket.current}
            />
            <Chat socket={socket.current} />
          </div>
        ) : (
          <Login socket={socket} />
        )}
      </div>
    </>
  );
}

export default App;
