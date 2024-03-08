import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};

const userSocketMap = {}; //{userId: socketId}

io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;
  if (userId != "undefined") userSocketMap[userId] = socket.id;
  // io.emit() is used to send events to all connected clients.
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  // // Real-time notification feature
  // socket.on("sendMessage", (message) => {
  //   if (userId) {
  //     const receiverSocketId = getReceiverSocketId(message.receiverId);
  //     if (receiverSocketId) {
  //       io.to(receiverSocketId).emit("getNotification", {
  //         senderId: message.senderId,
  //         isRead: false,
  //         date: new Date(),
  //       });
  //     }
  //   }
  // });

  // socket.on() is used to listen to the events & can be used both on client and on server side.
  socket.on("disconnect", () => {
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, io, server };
