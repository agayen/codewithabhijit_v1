---
sidebar_position: 2
title:  Setting ExpressJs
description: Installing ExpressJs and Setting up an Express.js application
keywords:   ['Expressjs', 'install ExpressJs','Routing in express.js']
---



## Install ``Express.js``
To install `Express.js` using npm, you need Run the following command:

```bash
npm install express
```

This will install the latest version of ``Express.js`` and its dependencies in your project's `node_modules` directory.

:::tip Notes
If you want to install a specific version of `Express.js`, you can use the following command:

```bash
npm install express@<version>
```

Replace `<version>` with the specific version number you want to install, such as 

`npm install express@4.17.1`
:::

## Initial api using `express.js`

To create an initial API using `Express.js`, you can use the following steps:

- Create a new file called `app.js` or `server.js` (or any other name you prefer) in your project's root directory.
- In your `app.js` file, require the `Express.js` module and create an instance of the `Express.js` application:

```javascript title='app.js'
const express = require('express');
const app = express();
```

- Define a simple route handler for a GET request that sends a "Hello, World!" response:

```javascript title='app.js'
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
```

- Start the server and listen for incoming requests:

```javascript title='app.js'
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
```

- Save the file and run it using the `node app.js` command in your terminal or command prompt.

This will start the server and listen for incoming requests on port 3000. You can then visit `http://localhost:3000` in your web browser to see the "Hello, World!" response.

Note that this is a very basic example and you can define more complex routes and middleware as needed for your API.

## Routing  in `Express.js`
Routing in Express.js refers to the process of mapping HTTP requests to specific handler functions, based on the request's method and URL. Routing is a fundamental aspect of building web applications, as it allows developers to define how their application responds to requests for different resources.

You can define routes using the `get`, `post`, `put`, and `delete` methods to handle HTTP GET, POST, PUT, and DELETE requests respectively. Here's an example of how to define and use these routes:

```javascript
const express = require('express');
const app = express();

// GET request
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// POST request
app.post('/', (req, res) => {
  res.send('Got a POST request');
});

// PUT request
app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user');
});

// DELETE request
app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
```

In this example, we define four routes: a `GET` request at the root path `/`, a `POST` request at the root path `/`, a `PUT` request at the `/user` path, and a `DELETE` request at the `/user` path. 

When a request is made to any of these routes, the corresponding callback function is executed. The callback function takes two parameters: `req` (the request object) and `res` (the response object). We can use these objects to read the request data and send a response back to the client.

Note that in order to use the `post`, `put`, and `delete` methods, we need to submit the request using a form or with a tool such as Postman. We cannot make these requests simply by typing a URL into the browser.