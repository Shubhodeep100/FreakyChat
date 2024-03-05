import useLogout from "../../hooks/useLogout";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  const { loading, logout } = useLogout();
  return (
    <div className="border-r border-slate-500 flex flex-col bg-zinc-900">
      <div className="bg-zinc-700 py-0.5">
        <SearchInput/>
      </div>
      <div className="divider px-3"></div>
      <Conversations />
      {!loading ? (
        <div className="flex flex-row gap-3 group " onClick={logout}>
          <LogoutButton />
          <p className="group-hover:cursor-pointer">Logout</p>
        </div>
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default Sidebar;
