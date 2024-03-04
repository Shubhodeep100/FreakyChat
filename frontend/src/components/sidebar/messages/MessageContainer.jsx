import MessageInput from "./MessageInput";
import Messages from "./Messages";
import chaticon from "../../../assets/chat.png";
import useConversation from "../../../zustand/useConversation";

const MessageContainer = () => {
const { selectedConversation, setSelectedConversation } = useConversation();


  return (
    <div className="md:min-w-[1000px] flex flex-col chatbody">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-zinc-700 px-4 py-1 flex flex-row items-center gap-2">
            <span className="label-text ">To: </span>
            <div className="flex flex-col">
              <span className="text-white text-xl">{selectedConversation.fullName}</span>
              <spna className="text-xs">Click here for contact info</spna>
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
