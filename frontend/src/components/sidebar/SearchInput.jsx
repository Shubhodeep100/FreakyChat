import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be atleast 3 characters long");
    }

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("Conversation not found");
    }
  };
  return (
    <form className="flex items-center gap-2 px-2" onSubmit={handleSubmit}>
      <input
        type="text1"
        placeholder="Search or start new chat"
        className="input input-bordered rounded-xl text-xs"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <IoIosSearch />
      </button>
    </form>
  );
};

export default SearchInput;
