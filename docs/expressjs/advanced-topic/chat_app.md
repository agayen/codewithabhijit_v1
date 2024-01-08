---
title: impelementation of Socket.io as a chat application
description: chat application using Socket.io
keywords:
  [
    "chat",
    "chat application",
    "socket.io",
    "realtime chat application",
    "implementations of socket.io",
    "socket.io client",
  ]
---

WebSockets provide a bi-directional communication channel between a client and a server over a single, long-lived connection. This enables real-time, event-driven communication between the client and server, making it ideal for building applications such as chat rooms, online gaming, and collaborative editing tools.

Here is an example of how to implement WebSockets in a Node.js application using the `socket.io` library:

1. Install `socket.io` using npm:

```bash
npm install socket.io
npm install express
```

2. Create a new instance of `socket.io` and attach it to your server:

```javascript title="server.js"
const express = require("express");
const { createServer } = require("node:http");
const { join } = require("node:path");
const { Server } = require("socket.io");

const app = express();
const server = createServer(app);
const io = new Server(server);

// Your server code goes here

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

io.on("connection", (socket) => {
  console.log("a user connected");
  console.log("A user connected");

  // Handle the 'message' event
  socket.on("message", (data) => {
    console.log(`Received message: ${data}`);
    // Broadcast the message to all connected clients
    io.emit("message", data);
  });

  // Handle the 'disconnect' event
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
```

In this example, we listen for the `connection` event which is emitted when a new client connects to the server. We then handle the `message` event, which is emitted when the client sends a message to the server. When we receive a message, we log it to the console and broadcast it to all connected clients using the `io.emit()` method. Finally, we handle the `disconnect` event, which is emitted when a client disconnects from the server.

4. Connect to your WebSocket server from the client-side using the `socket.io` client library:

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>WebSocket Chat</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        height: 100vh;
        background-color: #f4f4f4;
      }

      header {
        background-color: #333;
        color: #fff;
        padding: 1em;
        text-align: center;
      }

      main {
        flex: 1;
        overflow-y: auto;
        padding: 1em;
      }

      footer {
        display: flex;
        align-items: center;
        background-color: #fff;
        padding: 1em;
      }

      input[type="text"] {
        flex: 1;
        padding: 0.5em;
        margin-right: 1em;
        font-size: 1em;
      }

      button {
        background-color: #4caf50;
        color: #fff;
        padding: 0.5em 1em;
        font-size: 1em;
        cursor: pointer;
      }

      button:hover {
        background-color: #45a049;
      }
    </style>
  </head>
  <body>
    <header>
      <h1>WebSocket Chat</h1>
    </header>

    <main id="chatArea"></main>

    <footer>
      <input type="text" id="message" placeholder="Type your message..." />
      <button onclick="sendMessage()">Send</button>
    </footer>

    <script src="/socket.io/socket.io.js"></script>
    <script>
      const socket = io();
      const chatArea = document.getElementById("chatArea");

      socket.on("connect", () => {
        console.log("Connected to server");
      });

      socket.on("message", (data) => {
        console.log(`Received message: ${data}`);
        displayMessage(data);
      });

      socket.on("disconnect", () => {
        console.log("Disconnected from server");
      });

      function sendMessage() {
        const messageInput = document.getElementById("message");
        const message = messageInput.value;

        if (message.trim() !== "") {
          socket.emit("message", message);
          messageInput.value = "";
        }
      }

      function displayMessage(message) {
        const messageElement = document.createElement("div");
        messageElement.textContent = message;
        chatArea.appendChild(messageElement);
      }
    </script>
  </body>
</html>
```

In this example, we load the `socket.io.js` client library and connect to the server using `io()`. We then listen for the `connect`, `message`, and `disconnect` events, and handle them accordingly. Finally, we define a `sendMessage()` function that sends a message to the server using the `socket.emit()` method.

With this implementation, whenever a client sends a message to the server, it is logged to the console and broadcast to all connected clients in real-time.
