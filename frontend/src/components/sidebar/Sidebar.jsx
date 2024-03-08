import useLogout from "../../hooks/useLogout";
import Conversations from "./Conversations";
import SearchInput from "./SearchInput";
import { useAuthContext } from "../../context/AuthContext";

const Sidebar = () => {
  const { loading } = useLogout();
  const { authUser } = useAuthContext();
  // const loggedInUser = JSON.parse(localStorage.getItem("chat-user"));

  return (
    <div className="border-r border-slate-500 flex flex-col bg-zinc-900">
      <div className="bg-zinc-700 py-0.5">
        <SearchInput />
      </div>
      <div className="divider px-3"></div>
      <Conversations />
      {!loading ? (
        <div className="flex flex-row my-3 mx-3">
          <div className="flex justify-between w-full items-center">
            <div className="flex justify-center group p-1 items-center hover:bg-zinc-800 border border-1 hover:text-white bg-black rounded-lg w-3/4">
              <p className="font-txt text-xl">{authUser.fullName}</p>
            </div>

            <div className="w-10 rounded-full border-4 border-green-600  cursor-pointer ">
              <img src={authUser.profilePic} alt="user avatar" />
            </div>
          </div>
        </div>
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default Sidebar;
