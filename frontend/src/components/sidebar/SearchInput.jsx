import { IoIosSearch } from "react-icons/io";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text1"
        placeholder="Search or start new chat"
        className="input input-bordered rounded-full text-sm"
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <IoIosSearch className="text-xl"/>
      </button>
    </form>
  );
};

export default SearchInput;
