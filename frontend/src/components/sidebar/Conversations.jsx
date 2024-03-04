import Conversation from "./Conversation"

const Conversations = () => {

  useGetConversations()
  return (
    <div className="py-2 flex flex-col overflow-auto bg-zinc-900">
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
    </div>
  );
}

export default Conversations
