import MessageInput from "./MessageInput";
import Messages from "./Messages";
import useLogout from "../../../hooks/useLogout";
import chaticon from "../../../assets/chat.png";
import { CiSearch, CiMenuKebab } from "react-icons/ci";
import { FcVideoCall } from "react-icons/fc";
import useConversation from "../../../zustand/useConversation";
import { useEffect, useState, useRef } from "react";
import { useAuthContext } from "../../../context/AuthContext";

const MessageContainer = () => {
  const { logout } = useLogout();
  const { selectedConversation, setSelectedConversation } = useConversation();
  const [open, setOpen] = useState(false);
  let menuRef = useRef();
  const inputRef = useRef(null); // Maintain a ref to the input field

  useEffect(() => {
    // Focus the input field whenever selectedConversation changes
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [selectedConversation]);
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

  useEffect(() => {
    // Unmounting(Cleanup conversation);
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="md:min-w-[1000px] flex flex-col chatbody">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-zinc-700 px-4 py-1 flex items-center justify-between">
            <div className=" flex flex-row items-center gap-3 cursor-pointer">
              <div className="w-9 rounded-full">
                <img src={selectedConversation.profilePic} alt="ProfilePic" />
              </div>
              <div className="flex flex-col">
                <span className="text-white text-xl">
                  {selectedConversation.fullName}
                </span>
                <spna className="text-xs">Click here for contact info</spna>
              </div>
            </div>

            <div className="flex flex-row justify-between w-28">
              <div className="p-2 hover:bg-gray-600 rounded-full cursor-not-allowed">
                <FcVideoCall className=" text-white text-xl" />
              </div>
              <div className="p-2 hover:bg-gray-600 rounded-full cursor-pointer">
                <CiSearch className=" text-white text-xl" />
              </div>
              <div
                className="relative p-2 hover:bg-gray-600 rounded-full cursor-pointer"
                ref={menuRef}
              >
                <CiMenuKebab
                  className=" text-white text-xl"
                  onClick={() => {
                    setOpen(!open);
                  }}
                />

                <div
                  className={`dropdown-menu ${open ? "active" : "inactive"}`}
                >
                  <ul className="h-full w-full text-start my-1 text-white text-sm">
                    <li className="hover:bg-zinc-700 py-2 px-4">
                      Contact Info
                    </li>
                    <li className="hover:bg-zinc-700 py-2 px-4">Close chat</li>
                    <li className="hover:bg-zinc-700 py-2 px-4">Delete chat</li>
                    <li className="hover:bg-zinc-700 py-2 px-4">Report</li>
                    <li className="hover:bg-zinc-700 py-2 px-4 ">
                      Mute notification
                    </li>
                    <li className="hover:bg-zinc-700 py-2 px-4">Block</li>
                    <li
                      className="hover:bg-zinc-700 py-2 px-4"
                      onClick={logout}
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Messages />
          <MessageInput
            inputRef={inputRef}
            selectedConversation={selectedConversation}
          />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();

  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="px-4 text-center sm:text-lg md:text-xl space-y- text-gray-200 font-semibold flex flex-col items-center gap-2">
        <h1 className="text-2xl">{authUser.fullName}</h1>
        <div>
          {" "}
          Welcome to{" "}
          <h1 className="text-4xl text-white tracking-wide font-signature">
            Freaky<span className="text-green-500">Chatt</span>
          </h1>
        </div>
        <p>Select a Chat to start messaging.</p>

        <img
          src={chaticon}
          alt=""
          className="w-14 h-14 transform transition duration-500 hover:scale-110"
        />
      </div>
    </div>
  );
};
