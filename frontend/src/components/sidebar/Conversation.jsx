import { useState } from "react";
import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";
import { AiOutlineDown } from "react-icons/ai";
const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);
    const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div
        className={`flex justify-between items-center hover:bg-zinc-800 rounded p-2 py-2 cursor-pointer
      ${isSelected ? "bg-zinc-700" : ""}
      `}
        onClick={() => setSelectedConversation(conversation)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-row items-center gap-2">
          <div className={`avatar ${isOnline ? "online" : ""}`}>
            <div className="w-10 rounded-full">
              <img src={conversation.profilePic} alt="user avatar" />
            </div>
          </div>

          <div className="flex flex-1">
            <p className=" text-gray-200 font-txt">{conversation.fullName}</p>
          </div>
        </div>

        {isHovered && <AiOutlineDown />}
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;
