---
title: Cookies and Sessions
description: Cookies and Sessions in ExpressJs
keywords:
  ["Cookies and Sessions in ExpressJs", "ExpressJs", "Cookies", "Sessions"]
---

Cookies and sessions are two ways to persist data in a web application. Cookies are small pieces of data that are stored on the client-side and sent with each request to the server, while sessions are stored on the server-side and a session ID is sent to the client to identify the session.

Express.js provides middleware for working with cookies and sessions. Here's an overview of how to use them:

### Cookies

To use cookies in Express.js, you can use the `cookie-parser` middleware. Here's an example of how to set a cookie:

::: tip Notes
Need To install the `cookie-parser` middleware for Express.js, you can use the npm package manager. Here's an example:

```bash
npm install cookie-parser
```

:::

```javascript
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());

app.get("/", (req, res) => {
  res.cookie("name", "value");
  res.send("Cookie set");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
```

In the above example, the `cookie-parser` middleware is added to the application using `app.use(cookieParser())`. The `res.cookie()` method is used to set a cookie with the name `name` and the value `value`.

To read a cookie, you can use the `req.cookies` object. Here's an example:

```javascript
app.get("/", (req, res) => {
  const name = req.cookies.name;
  res.send(`Cookie value: ${name}`);
});
```

In the above example, the `name` variable is assigned the value of the `name` cookie using `req.cookies.name`.

### Sessions

To use sessions in Express.js, you can use the `express-session` middleware. Here's an example of how to set up sessions:
::: tip Notes
Need To install the `express-session` middleware for Express.js, you can use the npm package manager. Here's an example:

```
npm install express-session
```

:::

```javascript
const express = require("express");
const session = require("express-session");

const app = express();

app.use(
  session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/", (req, res) => {
  req.session.name = "value";
  res.send("Session set");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
```

In the above example, the `express-session` middleware is added to the application using `app.use(session(options))`. The `options` object is used to configure the session, including a `secret` key for encrypting the session data.

To read a session value, you can use the `req.session` object. Here's an example:

```javascript
app.get("/", (req, res) => {
  const name = req.session.name;
  res.send(`Session value: ${name}`);
});
```

In the above example, the `name` variable is assigned the value of the `name` session variable using `req.session.name`.

Error handling can also be implemented for cookies and sessions, as well as data validation.
