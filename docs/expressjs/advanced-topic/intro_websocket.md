---
title: What is websocket ?
description: WebSocket is a communication protocol that provides full-duplex communication channels over a single, long-lived connection.
keywords: ["websocket", "ws", "socket.io", "full-duplex", "connection"]
---

# What is websocket

WebSocket is a communication protocol that provides full-duplex communication channels over a single, long-lived connection. It is designed to be implemented in web browsers and web servers but can be used in other scenarios as well. WebSocket enables two-way communication between a client (typically a web browser) and a server over a single, long-lived connection, allowing real-time data transfer.

Key features of WebSocket include:

1. **Full-Duplex Communication:** WebSocket allows both the client and the server to send messages to each other independently, allowing for real-time bidirectional communication.

2. **Low Latency:** Unlike traditional HTTP connections, where a new connection needs to be established for each request, WebSocket maintains a persistent connection, reducing the overhead and latency associated with connection setup.

3. **Efficiency:** WebSocket uses a compact message framing protocol, resulting in lower overhead compared to HTTP. This makes it more suitable for scenarios where low-latency communication is crucial, such as real-time applications and online gaming.

4. **Event-Driven Model:** WebSocket operates on an event-driven model, where the server or the client can send messages to the other party when an event occurs. This is particularly useful for scenarios where real-time updates are required, such as live chat applications, financial dashboards, or collaborative editing tools.

5. **Cross-Origin Communication:** WebSocket supports cross-origin communication, allowing a web page served from one domain to connect to a WebSocket server on another domain. This is facilitated by the WebSocket handshake process, which includes support for the WebSocket protocol in web browsers.

6. **Standardization:** WebSocket is defined as a standardized protocol by the Internet Engineering Task Force (IETF) in RFC 6455. This standardization ensures interoperability between WebSocket implementations across different platforms and programming languages.

WebSocket is commonly used in web development for building real-time applications, such as online chat applications, live sports score updates, financial market dashboards, and other scenarios where low-latency communication is essential. To implement WebSocket communication, both the client and server need to support the WebSocket protocol, and there are various libraries and frameworks available for different programming languages to simplify the implementation process.
