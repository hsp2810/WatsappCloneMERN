import { Server } from "socket.io";

const SOCKET_PORT = 8080;
const socketServer = new Server(SOCKET_PORT, {
  cors: {
    origin: "http://localhost:3000",
  },
});

// After the conncetion is setup
socketServer.on("connection", (socket) => {
  console.log(`Socket Connection successful`);

  // This is when the user joins the application
  socket.on("setup", (userData) => {
    socket.join(userData._id);
    console.log("User connected : ", userData.name);
    socket.emit("connected");
  });

  socket.on("joinchat", (chatData, homeUser) => {
    socket.join(chatData._id);
    console.log("Chat: ", chatData._id, " is joined by: ", homeUser._id);
    socket.emit("connected");
  });

  socket.on("send_message", (chatData, messageData) => {
    console.log("Got the latest message: ", messageData.content);
    console.log("Sending to the whole chat, ", chatData._id);
    socket
      .in(chatData._id)
      .emit("receive_message", { chat: chatData, message: messageData });
  });

  socket.on("newmessage", (messageReceivedData) => {
    console.log("Printing the sent message: ", messageReceivedData);
  });
});
