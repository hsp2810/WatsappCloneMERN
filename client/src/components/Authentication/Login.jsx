import React, { useCallback, useState } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { fetchAllExLoginUser, login } from "../../api/user";
import { useDispatch } from "react-redux";
import { io } from "socket.io-client";

const defUser = {
  email: "first123@gmail.com",
  password: "password",
};

const Login = ({ socket }) => {
  const [loginUser, setLoginUser] = useState(defUser);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault();
      const response = await login(loginUser);

      if (response.status === 200) {
        dispatch({
          type: "loginSuccess",
          payload: response.data.homeUser,
        });

        const res = await fetchAllExLoginUser();
        if (res && res.status === 200) {
          dispatch({
            type: "fetchFriendsSuccess",
            payload: res.data.users,
          });
        }
        socket.current = io("http://localhost:8080");
        socket.current.emit("setup", response.data.homeUser);
      }
    },
    [loginUser]
  );

  const handleChange = (e) =>
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value });

  const toggleShow = (showPassword) => setShowPassword(!showPassword);

  return (
    <>
      <div className='relative text-white w-full flex flex-col'>
        <div className='flex pt-10 bg-tealBackground h-[30vh] pl-[17rem]'>
          <span>
            <WhatsAppIcon fontSize='large' className='bg-green-400 shadow-lg' />
          </span>
          <h1 className='text-lg uppercase font-thin ml-2'>WhatsApp web</h1>
        </div>
        <div className='absolute flex justify-center h-[80vh] bg-white w-[65%] rounded-sm top-[6rem] left-1/2 transform -translate-x-1/2 pt-[8rem] m-auto p-[2rem] shadow-lg'>
          <form className='w-full'>
            <h1 className='text-tealBackground text-lg text-center mb-8 uppercase'>
              Login
            </h1>
            <div className='mt-3 flex flex-col'>
              <label
                htmlFor='email'
                className='uppercase text-xs text-tealBackground font-semibold w-1/2 m-auto mb-1'
              >
                email
              </label>
              <input
                type='text'
                className='pl-3 border pr-3 py-[5px] font-light text-sm focus:outline-none text-black rounded-md w-1/2 m-auto'
                name='email'
                value={loginUser.email}
                onChange={handleChange}
              />
            </div>
            <div className='mt-3 flex flex-col'>
              <label
                htmlFor='password'
                className='uppercase text-xs text-tealBackground font-semibold w-1/2 m-auto mb-1'
              >
                password
              </label>
              <div className='relative w-1/2 m-auto'>
                <input
                  type={showPassword ? "text" : "password"}
                  className='pl-3 border pr-[30px] py-[5px] font-light text-sm focus:outline-none text-black rounded-md w-full'
                  name='password'
                  value={loginUser.password}
                  onChange={handleChange}
                />
                <span className='absolute right-0 top-0 bottom-0 flex items-center pr-3'>
                  {!showPassword ? (
                    <VisibilityIcon
                      className='text-iconColor cursor-pointer'
                      onClick={() => toggleShow(showPassword)}
                    />
                  ) : (
                    <VisibilityOffIcon
                      className='text-iconColor cursor-pointer'
                      onClick={() => toggleShow(showPassword)}
                    />
                  )}
                </span>
              </div>
            </div>

            <div className='w-1/2 block m-auto mt-3'>
              <button
                className='outline-none bg-tealBackground p-2 rounded-md font-thin'
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
