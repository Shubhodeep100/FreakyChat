import MessageInput from "./MessageInput";
import Messages from "./Messages";
import {TiMessages} from "react-icons/ti"
const MessageContainer = () => {
  const noChatSelected = true;

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 px-4 mb-2">
            <span className="label-text">To: </span>
            <span className="text-gray-900 font-semibold">Shubhodeep</span>
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
    <div className="flex w-full items-center justify-center h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Hello Shubhodeep!</p>
        <p>
          {" "}
          Welcome to{" "}
          <span className="bg-gradient-to-r from-yellow-300 to-orange-100 bg-clip-text text-transparent font-bold text-2xl">
            FreakyChatt
          </span>
        </p>
        <p>Select a Chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
