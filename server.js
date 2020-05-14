const express = require("express");
const path = require("path");
const socketio = require("socket.io");
const http = require("http");
const PORT = process.env.PORT || 3131;
const app = express();
const server = http.createServer(app);
const io = socketio(server);
app.use("/", express.static(path.join(__dirname, "frontend")));

io.on("connection", (socket) => {
  console.log("New Socekt formed from" + socket.id);
  socket.emit("connected");
  socket.on("mouse", function (data) {
    // Data comes in as whatever was sent, including objects
    console.log("Received: 'mouse' " + data.x + " " + data.y);
    // Send it to all other clients
    io.emit("draw", data);
  });
});

server.listen(PORT, () => {
  console.log("Server started at https://localhost:" + PORT);
});
