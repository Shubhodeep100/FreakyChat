import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/sidebar/messages/MessageContainer";

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[650px] rounded-lg overflow-hidden  bg-clip-padding backdrop-filter-lg bg-opacity-0 ">
      <Sidebar/>
      <MessageContainer/>
    </div>
  );
};

export default Home;
