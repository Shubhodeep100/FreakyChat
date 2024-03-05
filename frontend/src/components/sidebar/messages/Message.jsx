import { useAuthContext } from "../../../context/AuthContext";
import { extractTime } from "../../../utils/extractTime";
const Message = ({ message }) => {
  const { authUser } = useAuthContext();
const formattedTime = extractTime(message.createdAt);
  const fromMe = message.senderId === authUser._id;
  const chatClasssName = fromMe ? "chat-end" : "chat-start";
  const bubbleBgColor = fromMe
    ? "bg-gradient-to-r from-slate-900 to-slate-700"
    : "bg-gradient-to-r from-indigo-400 to-cyan-400";

  return (
    <div className={`chat ${chatClasssName}`}>
      <div>
        <div
          className={`chat-bubble text-white ${bubbleBgColor} flex justify-between`}
        >
          {message.message}
          <div className="chat-footer text-sm flex gap-1 items-end text-slate-200">
            {formattedTime}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
