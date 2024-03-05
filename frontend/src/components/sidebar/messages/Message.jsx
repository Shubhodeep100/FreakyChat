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
        <div className={`chat-bubble text-white ${bubbleBgColor} flex justify-between`}>
          {message.message}
          <div className="chat-footer text-sm flex gap-1 items-end text-slate-200">
            12:45
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
