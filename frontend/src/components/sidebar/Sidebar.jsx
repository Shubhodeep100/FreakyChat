import useLogout from "../../hooks/useLogout";
import Conversations from "./Conversations";
import SearchInput from "./SearchInput";
import { useAuthContext } from "../../context/AuthContext";
import { useEffect, useRef, useState } from "react";

const Sidebar = () => {
  const { loading } = useLogout();
  const { authUser } = useAuthContext();
  const { logout } = useLogout();
  const [open, setOpen] = useState(false);
  let menuRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div className="border-r border-slate-500 flex flex-col bg-zinc-900">
      <div className="bg-zinc-700 py-0.5">
        <SearchInput />
      </div>
      <div className="divider px-3"></div>
      <Conversations />
      {!loading ? (
        <div className="flex flex-row my-3 mx-3">
          <div
            className="flex justify-between w-full items-center"
          >
            <div className="flex justify-center group p-1 items-center hover:bg-zinc-800 border border-1 hover:text-white bg-black rounded-lg w-3/4">
              <p className="font-txt text-xl">{authUser.fullName}</p>
            </div>

            <div
              className="w-10 rounded-full border-4 border-green-600  cursor-pointer relative"
              ref={menuRef}
            >
              <img
                src={authUser.profilePic}
                alt="user avatar"
                onClick={() => {
                  setOpen(!open);
                }}
              />

              <div className={`dropdown-menu2 ${open ? "active" : "inactive"}`}>
                <ul className="h-full w-full text-start my-1 text-white text-sm">
                  <li className="hover:bg-zinc-700 py-2 px-4">Contact Info</li>
                  <li className="hover:bg-zinc-700 py-2 px-4">Close chat</li>
                  <li className="hover:bg-zinc-700 py-2 px-4">Delete chat</li>
                  <li className="hover:bg-zinc-700 py-2 px-4">Report</li>
                  <li className="hover:bg-zinc-700 py-2 px-4 ">
                    Mute notification
                  </li>
                  <li className="hover:bg-zinc-700 py-2 px-4">Block</li>
                  <li className="hover:bg-zinc-700 py-2 px-4" onClick={logout}>
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default Sidebar;
