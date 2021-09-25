import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkLogin } from "../store/actions/index.js";

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const dispatch = useDispatch();
  const store = useSelector((state) => state.main);

  useEffect(() => {
    // store.subscribe(() => {
    // const token = localStorage.getItem("access_token");
    // console.log(token);
    // });
    console.log(store.access_token);

    if (store.access_token) {
      // window.location = `/main`;
    }
    // localStorage.setItem("access_token", JSON.stringify(access_token));
  });

  return (
    <>
      <div className="flex h-screen items-center">
        <div className="px-6 w-3/6 max-w-2xl mx-auto justify-center items-center">
          <div className="flex flex-col my-3 bg-white rounded-lg shadow-md py-12 mx-auto items-center justify-center space-y-5 w-full px-12 lg:px-16 xl:px-24">
            <div className="w-full py-4 text-xl text-center">
              Todo App | FE Developers
            </div>

            <div className="flex flex-col w-full justify-center">
              <span className="py-1 text-base">Username</span>
              <input
                type="text"
                className="font-light flex-1 border border-gray-400 rounded-full w-full px-6 py-2.5 outline-none shadow-md"
                placeholder="ชื่อผู้ใช้งาน"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-full justify-center">
              <span className="py-1 text-base">Password</span>
              <input
                type="password"
                className="font-light flex-1 border border-gray-400 rounded-full w-full px-6 py-2.5 outline-none shadow-md"
                placeholder="รหัสผ่าน"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="w-full py-3.5">
              <button
                className="flex py-3 w-full rounded-full justify-center bg-red text-white text-center items-center hover:bg-opacity-80 hover:shadow cursor-pointer shadow-md text-normal"
                onClick={() => dispatch(checkLogin({ username, password }))}
              >
                Login
              </button>
              <div className="py-6">
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
