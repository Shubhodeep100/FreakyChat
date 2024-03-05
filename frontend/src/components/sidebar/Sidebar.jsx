import useLogout from "../../hooks/useLogout";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  const { loading, logout } = useLogout();
  return (
    <div className="border-r border-slate-500 flex flex-col p-1">
      <div>
        <SearchInput />
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
