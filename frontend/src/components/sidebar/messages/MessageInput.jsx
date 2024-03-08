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
        {/* <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        /> */}

        <InputEmoji
          value={message}
          onChange={setMessage}
          cleanOnEnter
          onEnter={handleSendMessage}
          placeholder="Send a message"
          keepOpened={true}
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
