import { createContext, useEffect, useState, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [incomingMessages, setIncomingMessages] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser) {
      const newSocket = io("http://localhost:5000", {
        query: {
          userId: authUser._id,
        },
      });
      setSocket(newSocket);

      newSocket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      // Handle received messages here
      newSocket.on("receiveMessage", ({ senderId, message }) => {
        const newIncomingMessage = {
          senderId,
          message,
        };
        setIncomingMessages((prevMessages) => [
          ...prevMessages,
          newIncomingMessage,
        ]);
      });

      return () => {
        newSocket.close();
        setSocket(null);
      };
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  const sendMessage = (receiverId, message) => {
    if (socket) {
      socket.emit("sendMessage", { receiverId, message });
    }
  };

  return (
    <SocketContext.Provider
      value={{ socket, onlineUsers, incomingMessages, sendMessage }}
    >
      {children}
    </SocketContext.Provider>
  );
};
