const Conversation = ({conversation, lastIdx}) => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-zinc-800 rounded p-2 py-1 cursor-pointer">
        <div className="avatar online">
          <div className="w-10 rounded-full">
            <img
              src={conversation.profilePic}
              alt="Avatar"
            />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className=" text-gray-200">{conversation.fullName}</p>
          
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1" />
    </>
  );
};

export default Conversation;
