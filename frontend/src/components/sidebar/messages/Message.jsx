import {useAuthContext} from '../../../context/AuthContext';
import useConversation from '../../../zustand/useConversation';

const Message = ({ message }) => {
  const { authUser } = useAuthContext();

  const {selectedConversation} = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClasssName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser.profilePic : selectedConversation.profilePic;

  
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            alt="Tailwind char bubble component"
          />
        </div>
      </div>
      <div>
        <div className={`chat-bubble text-white bg-blue-600`}>
          Hii! whats up?
        </div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
          12:45
        </div>
      </div>
    </div>
  );
};

export default Message;
