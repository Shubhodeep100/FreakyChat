import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { AnimatePresence, motion } from "framer-motion";
import chaticon from "../../../assets/chat.png";
import { CiSearch, CiMenuKebab } from "react-icons/ci";
import { FcVideoCall } from "react-icons/fc";
import useConversation from "../../../zustand/useConversation";
import { useEffect, useState, useRef } from "react";
import { useAuthContext } from "../../../context/AuthContext";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const toggleButtonRef = useRef(null);
  const [state, setState] = useState({ isDropdownOpen: false });

  const toggleDropdown = () => {
    setState((prevState) => ({
      ...prevState,
      isDropdownOpen: !prevState.isDropdownOpen,
    }));
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.1,
        ease: [0.12, 0, 0.12, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.2,
        duration: 0.5,
        ease: [0.12, 1, 0.12, 1],
      },
    },
  };

  useEffect(() => {
    // Unmounting(Cleanup conversation);
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="md:min-w-[1100px] flex flex-col chatbody">
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
              <div className="relative p-2 hover:bg-gray-600 rounded-full cursor-pointer">
                <CiMenuKebab
                  className=" text-white text-xl"
                  onClick={toggleDropdown}
                  ref={toggleButtonRef}
                />
                <AnimatePresence>
                  {state.isDropdownOpen && (
                    <motion.div
                      className="dropdown-content"
                      variants={menuVars}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{
                        duration: 0.2,
                        type: "fade",
                        stiffness: 60,
                      }}
                    >
                      <div className="absolute items-center flex flex-col right-1 top-10 bg-zinc-600 rounded-md shadow-md w-40  z-50 cursor-pointer">
                        <ul className="h-full w-full text-start my-1 text-white text-sm">
                          <li className="hover:bg-zinc-700 py-2 px-4">
                            Contact Info
                          </li>
                          <li className="hover:bg-zinc-700 py-2 px-4">
                            Close chat
                          </li>
                          <li className="hover:bg-zinc-700 py-2 px-4">
                            Delete chat
                          </li>
                          <li className="hover:bg-zinc-700 py-2 px-4">
                            Report
                          </li>
                          <li className="hover:bg-zinc-700 py-2 px-4 ">
                            Mute notification
                          </li>
                          <li className="hover:bg-zinc-700 py-2 px-4">Block</li>
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
          <Messages />
          <MessageInput />
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
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>{authUser.fullName}</p>
        <p>
          {" "}
          Welcome to{" "}
          <h1 className="text-2xl text-white tracking-wide font-signature">
            Freaky<span className="text-green-500">Chatt</span>
          </h1>
        </p>
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
