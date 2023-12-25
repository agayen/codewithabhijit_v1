WebSockets provide a bi-directional communication channel between a client and a server over a single, long-lived connection. This enables real-time, event-driven communication between the client and server, making it ideal for building applications such as chat rooms, online gaming, and collaborative editing tools.

Here is an example of how to implement WebSockets in a Node.js application using the `socket.io` library:

1. Install `socket.io` using npm:

```bash
npm install socket.io
```

2. Create a new instance of `socket.io` and attach it to your server:

```javascript
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// Your server code goes here
```

3. Define your WebSocket event handlers:

```javascript
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle the 'message' event
  socket.on('message', (data) => {
    console.log(`Received message: ${data}`);
    // Broadcast the message to all connected clients
    io.emit('message', data);
  });

  // Handle the 'disconnect' event
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});
```

In this example, we listen for the `connection` event which is emitted when a new client connects to the server. We then handle the `message` event, which is emitted when the client sends a message to the server. When we receive a message, we log it to the console and broadcast it to all connected clients using the `io.emit()` method. Finally, we handle the `disconnect` event, which is emitted when a client disconnects from the server.

4. Connect to your WebSocket server from the client-side using the `socket.io` client library:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>WebSocket Client</title>
  </head>
  <body>
    <script src="/socket.io/socket.io.js"></script>
    <script>
      const socket = io();
      socket.on('connect', () => {
        console.log('Connected to server');
      });

      socket.on('message', (data) => {
        console.log(`Received message: ${data}`);
      });

      socket.on('disconnect', () => {
        console.log('Disconnected from server');
      });

      function sendMessage() {
        const message = document.getElementById('message').value;
        socket.emit('message', message);
      }
    </script>

    <input type="text" id="message" />
    <button onclick="sendMessage()">Send</button>
  </body>
</html>
```

In this example, we load the `socket.io.js` client library and connect to the server using `io()`. We then listen for the `connect`, `message`, and `disconnect` events, and handle them accordingly. Finally, we define a `sendMessage()` function that sends a message to the server using the `socket.emit()` method.

With this implementation, whenever a client sends a message to the server, it is logged to the console and broadcast to all connected clients in real-time.