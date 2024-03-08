import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../../hooks/useSendMessage";
import InputEmoji from "react-input-emoji";
const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!message) return;
  //   await sendMessage(message);
  //   setMessage("");
  // };

  
  const handleSendMessage = async () => {
    if (!message.trim()) return; // Check if message is empty or only contains whitespace
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form
      className="px-4 my-3"
      onSubmit={(e) => {
        e.preventDefault();
        handleSendMessage();
      }}
    >
      <div className="w-full flex flex-row gap-3">

        <InputEmoji
          value={message}
          onChange={setMessage}
          cleanOnEnter
          onEnter={handleSendMessage}
          placeholder="Send a message"
          keepOpened={true}
          fontSize={22}
          fontFamily="sans-serif"
          height={48}
        />

        <button
          type="submit"
          className=" inset-y-0 end-0 flex items-center pe-3"
        >
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <BsSend />
          )}
        </button>
      </div>
    </form>
  );
};
export default MessageInput;
