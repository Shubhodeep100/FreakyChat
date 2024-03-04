import MessageInput from "./MessageInput";
import Messages from "./Messages";
import chaticon from "../../../assets/chat.png";
const MessageContainer = () => {
  const noChatSelected = true;

  return (
    <div className="md:min-w-[1000px] flex flex-col containerbody">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-zinc-700 px-4 py-2">
            <span className="label-text">To: </span>
            <span className="text-white text-xl">Shubhodeep</span>
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
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Hello Shubhodeep!</p>
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
