import { useAuthContext } from "../../../context/AuthContext";
import useConversation from "../../../zustand/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();

  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClasssName = fromMe ? "chat-end" : "chat-start";
  // const profilePic = fromMe
  //   ? authUser.profilePic
  //   : selectedConversation.profilePic;
  const bubbleBgColor = fromMe
    ? "bg-gradient-to-r from-slate-900 to-slate-700"
    : "bg-gradient-to-r from-indigo-400 to-cyan-400";

  return (
    <div className={`chat ${chatClasssName}`}>
      {/* <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="ProfilePic" />
        </div>
      </div> */}
      <div>
        <div className={`chat-bubble text-white ${bubbleBgColor}`}>
          {message.message}
          <span className="text-xs text-gray-400 items-end">12:45</span>
        </div>
        {/* <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
          12:45
        </div> */}
      </div>
    </div>
  );
};

export default Message;
