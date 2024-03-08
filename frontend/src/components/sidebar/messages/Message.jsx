import { useAuthContext } from "../../../context/AuthContext";
import { extractTime } from "../../../utils/extractTime";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const formattedTime = extractTime(message.createdAt);
  const [time, amOrPm] = formattedTime.split(" ");
  const fromMe = message.senderId === authUser._id;
  const chatClasssName = fromMe ? "chat-end" : "chat-start";
  const bubbleBgColor = fromMe
    ? "bg-gradient-to-r from-slate-900 to-slate-700"
    : "senderBubble";

  const shakeClass = message.shouldShake ? "shake" : "";
  return (
    <div className={`chat ${chatClasssName}`}>
      <div>
        <div
          className={`chat-bubble  shadow-md shadow-black text-white ${bubbleBgColor} ${shakeClass} flex justify-between gap-2`}
        >
          {message.message}
          <div className="chat-footer text-xs flex gap-1 items-end text-slate-200">
            <div>{time}</div>
            <div>{amOrPm}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
