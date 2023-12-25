Socket.io is a JavaScript library that enables real-time, bidirectional and event-based communication between the web browser and the server. It is widely used for building real-time web applications such as chat applications, real-time gaming, collaborative tools, and more.

To use Socket.io in your Express.js application, you first need to install the `socket.io` library using npm:

```
npm install socket.io
```

Once installed, you can create a new instance of the `Socket.io` object in your Express.js application:

```javascript
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
```

The `io` object is a server-side component of Socket.io that handles the real-time communication between the server and the client.

To handle real-time events, you can listen to events on the `io` object, and emit events from the client-side using the `socket` object:

```javascript
io.on('connection', (socket) => {
  console.log('A user connected');
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
  socket.on('chat message', (msg) => {
    console.log('Message: ' + msg);
    io.emit('chat message', msg);
  });
});
```

In the above example, we listen to the `'connection'` event on the `io` object, which is emitted when a new client connects to the server. Inside the callback function, we log a message to the console and set up event listeners for the `'disconnect'` and `'chat message'` events.

When the `'chat message'` event is emitted from the client-side, we log the message to the console and emit the same event to all connected clients using the `io.emit()` method.

Socket.io also provides a number of other useful features, such as namespaces, rooms, and broadcasting. These can be used to organize your real-time application and manage communication between different groups of clients.

Overall, Socket.io is a powerful and easy-to-use library for building real-time web applications with Express.js.