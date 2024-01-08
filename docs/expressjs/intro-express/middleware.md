---
title:  Middleware in Express.js
description:  Use of middleware in Express.js, this is main part for security
keywords:   ['middleware', 'ExpressJs','Built-in middleware functions in Express.js','Writing custom middleware functions in Express.js','Using middleware for authentication and authorization','Error handling with middleware in Express.js','Parsing request data with middleware (body-parser, multer, etc.)
','Using middleware for caching and performance optimization','Creating middleware to handle CORS (Cross-Origin Resource Sharing) requests']
---

## Middleware  in `Express.js`

### Built-in middleware functions in Express.js

Express.js provides several built-in middleware functions that can be used in web applications. Here are some of the most commonly used built-in middleware functions in Express.js:

1. `express.static`: This middleware function is used to serve static files such as images, CSS, and JavaScript files. It takes one argument, which is the directory where the static files are located, and returns a middleware function that can be used with `app.use()`. For example, to serve static files from the `public` directory, you can use the following code:

```javascript
app.use(express.static('public'));
```

2. `express.json`: This middleware function is used to parse JSON request bodies. It takes no arguments and returns a middleware function that can be used with `app.use()`. For example, to parse JSON request bodies, you can use the following code:

```javascript
app.use(express.json());
```

3. `express.urlencoded`: This middleware function is used to parse URL-encoded request bodies. It takes one argument, which is an object that specifies the extended option, and returns a middleware function that can be used with `app.use()`. For example, to parse URL-encoded request bodies with the extended option enabled, you can use the following code:

```javascript
app.use(express.urlencoded({ extended: true }));
```

4. `express.cookieParser`: This middleware function is used to parse cookie headers. It takes one argument, which is a secret key used to sign the cookies, and returns a middleware function that can be used with `app.use()`. For example, to parse cookie headers with a secret key, you can use the following code:

```javascript
app.use(express.cookieParser('mysecret'));
```

5. `express.session`: This middleware function is used to enable session support in Express.js. It takes one argument, which is a configuration object, and returns a middleware function that can be used with `app.use()`. For example, to enable session support with a memory store and a secret key, you can use the following code:

```javascript
app.use(express.session({
  secret: 'mysecret',
  store: new express.session.MemoryStore()
}));
```

These built-in middleware functions are just a few examples of what Express.js provides out of the box. By using these functions, developers can easily add common functionality to their web applications without having to write custom middleware functions.

### Writing custom middleware functions in Express.js

Custom middleware functions in Express.js are functions that you can define yourself to perform specific tasks or operations that are not provided by the built-in middleware functions. These functions can be used to perform a wide range of tasks, such as logging, authentication, error handling, and more.

Here's an example of a custom middleware function that logs the request method and URL for every request that is received by the server:

```javascript
function logRequest(req, res, next) {
  console.log('Request method:', req.method);
  console.log('Request URL:', req.url);
  next();
}
```

In this example, the `logRequest` middleware function takes three parameters: `req` (the request object), `res` (the response object), and `next` (the next middleware function in the chain). The function logs the request method and URL to the console, then calls the `next` function to pass control to the next middleware function in the chain.

To use this middleware function in your Express.js application, you can call the `app.use()` method and pass the `logRequest` function as a parameter:

```javascript
app.use(logRequest);
```

This tells Express.js to use the `logRequest` middleware function for all incoming requests.

Custom middleware functions can be used for many different purposes. For example, you could create a middleware function that checks if the user is authenticated and redirects them to the login page if they are not:

```javascript
function requireAuth(req, res, next) {
  if (req.session && req.session.user) {
    next();
  } else {
    res.redirect('/login');
  }
}
```

In this example, the `requireAuth` middleware function checks if the user is authenticated by checking if a `user` property exists on the session object. If the user is authenticated, the middleware calls the `next` function to pass control to the next middleware function in the chain. If the user is not authenticated, the middleware redirects the user to the login page.

To use this middleware function, you can add it to any route that requires authentication:

```javascript
app.get('/dashboard', requireAuth, function(req, res) {
  res.render('dashboard');
});
```

In this example, the `requireAuth` middleware function is passed as the second parameter to the `app.get()` method, which means that it will be called before the route handler function is executed.

Custom middleware functions in Express.js are a powerful tool for building complex and feature-rich web applications. By defining your own middleware functions, you can customize the behavior of your application to meet your specific needs and requirements.

### Using middleware for authentication and authorization

One common use case for middleware in Express.js is to handle authentication and authorization. Authentication refers to the process of verifying a user's identity, while authorization refers to the process of determining what actions a user is allowed to perform.

Here's an example of how to use middleware for authentication and authorization in Express.js:

```javascript
// Middleware to check if user is authenticated
function requireAuth(req, res, next) {
  if (req.session && req.session.user) {
    next();
  } else {
    res.redirect('/login');
  }
}

// Middleware to check if user is authorized
function requireRole(role) {
  return function(req, res, next) {
    if (req.session && req.session.user && req.session.user.role === role) {
      next();
    } else {
      res.status(403).send('Unauthorized');
    }
  }
}

// Route that requires authentication and admin role
app.get('/admin', requireAuth, requireRole('admin'), function(req, res) {
  res.send('Welcome, admin!');
});

// Route that requires authentication and user role
app.get('/profile', requireAuth, requireRole('user'), function(req, res) {
  res.send('Welcome, user!');
});
```

In this example, we define two middleware functions: `requireAuth` and `requireRole`. The `requireAuth` middleware checks if the user is authenticated by looking for a `user` property on the session object. If the user is not authenticated, the middleware redirects them to the login page.

The `requireRole` middleware takes a `role` parameter and returns a middleware function that checks if the user has the specified role. If the user has the correct role, the middleware calls the `next` function to continue processing the request. If the user does not have the correct role, the middleware sends a 403 (Forbidden) response.

We then use these middleware functions in our routes to require authentication and authorization for certain routes. For example, the `/admin` route requires authentication and the `admin` role, while the `/profile` route requires authentication and the `user` role.

By using middleware for authentication and authorization, we can easily secure our routes and ensure that only authorized users can access sensitive information or perform certain actions.

### Error handling with middleware in Express.js

Error handling is an important aspect of building web applications, and middleware functions can be used to handle errors in Express.js. Middleware error handling functions in Express.js are middleware functions that take four arguments, with the first argument being an error object.

Here's an example of a simple error handling middleware function in Express.js:

```javascript
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
```

In this example, the middleware function takes an error object as its first argument, followed by the standard `req`, `res`, and `next` parameters. The error object contains information about the error that occurred, such as a message or a stack trace.

The `console.error` statement logs the error message and stack trace to the console, and the `res.status` and `res.send` statements send a 500 Internal Server Error response to the client.

You can also create custom error handling middleware functions to handle specific types of errors. For example, you might create a middleware function to handle validation errors in a form submission:

```javascript
function handleValidationErrors(err, req, res, next) {
  if (err.name === 'ValidationError') {
    res.status(400).send('Invalid form data');
  } else {
    next(err);
  }
}

app.use(handleValidationErrors);
```

In this example, the `handleValidationErrors` middleware function checks if the error object has a `name` property equal to `ValidationError`, indicating that the error was caused by invalid form data. If so, the middleware sends a 400 Bad Request response to the client. Otherwise, the middleware calls the `next` function to pass control to the next middleware function in the chain.

By using middleware functions for error handling in Express.js, you can centralize your error handling logic and make your code more modular and maintainable. You can also create custom error handling middleware functions to handle specific types of errors and provide more informative error messages to your users.

### Parsing request data with middleware (body-parser, multer, etc.)

In Express.js, middleware can be used to parse incoming request data, such as form data, JSON data, and file uploads. Two popular middleware modules for parsing request data are `body-parser` and `multer`.

`body-parser` is a middleware module that parses the HTTP request body and makes it available as a JavaScript object in `req.body`. It can parse different types of request data, including JSON, URL-encoded, and raw text. Here's an example of using `body-parser` to parse JSON data:

```javascript
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/api/data', (req, res) => {
  const data = req.body;
  // Do something with the data...
  res.send('Data received');
});
```

In this example, the `body-parser` middleware is used to parse incoming JSON data. The parsed data is then available in `req.body` and can be used in the route handler function.

`multer` is a middleware module that handles file uploads in Express.js. It can be used to upload single or multiple files, and provides various options for file size limits, file type validation, and destination directory. Here's an example of using `multer` to handle file uploads:

```javascript
const express = require('express');
const multer = require('multer');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/api/upload', upload.single('file'), (req, res) => {
  const file = req.file;
  // Do something with the file...
  res.send('File uploaded');
});
```

In this example, `multer` middleware is used to handle a single file upload with the name `file`. The uploaded file is stored in the `uploads/` directory specified in the `multer` options object. The uploaded file is available in `req.file` and can be used in the route handler function.

Using middleware modules like `body-parser` and `multer` can greatly simplify the task of parsing request data in Express.js, and allow developers to focus on building more complex and feature-rich web applications.

### Using middleware for caching and performance optimization

Middleware can be used for caching and performance optimization in Express.js to speed up response times and reduce the load on the server. Caching can be used to store frequently accessed data in memory, so that subsequent requests for the same data can be served quickly without having to perform expensive calculations or database queries.

There are several ways to implement caching in Express.js using middleware, including:

1. In-memory caching: In-memory caching stores data in the server's memory, which is faster to access than a database or file system. This type of caching can be implemented using a simple JavaScript object to store key-value pairs, which can be accessed by subsequent middleware functions.

```javascript
const cache = {};

function cacheMiddleware(req, res, next) {
  const cacheKey = req.originalUrl || req.url;
  const cachedData = cache[cacheKey];
  if (cachedData) {
    res.send(cachedData);
  } else {
    res.sendResponse = res.send;
    res.send = (body) => {
      cache[cacheKey] = body;
      res.sendResponse(body);
    };
    next();
  }
}

app.use(cacheMiddleware);
```

In this example, the `cacheMiddleware` function checks if the requested data is already stored in the `cache` object. If the data is found, it is returned immediately. Otherwise, the function modifies the `res.send` method to store the response data in the `cache` object before sending the response to the client.

2. Redis caching: Redis is an in-memory data store that can be used to implement more advanced caching strategies, such as time-based expiration and distributed caching. Redis can be used in conjunction with Express.js using the `redis` package and a middleware function that stores and retrieves data from Redis.

```javascript
const redis = require('redis');
const client = redis.createClient();

function redisCacheMiddleware(req, res, next) {
  const cacheKey = req.originalUrl || req.url;
  client.get(cacheKey, (err, cachedData) => {
    if (cachedData) {
      res.send(cachedData);
    } else {
      res.sendResponse = res.send;
      res.send = (body) => {
        client.setex(cacheKey, 3600, body);
        res.sendResponse(body);
      };
      next();
    }
  });
}

app.use(redisCacheMiddleware);
```

In this example, the `redisCacheMiddleware` function checks if the requested data is already stored in Redis using the `client.get` method. If the data is found, it is returned immediately. Otherwise, the function modifies the `res.send` method to store the response data in Redis using the `client.setex` method before sending the response to the client.

By implementing caching middleware in Express.js, you can reduce the load on your server and improve the response times for your application.


### Creating middleware to handle CORS (Cross-Origin Resource Sharing) requests

Cross-Origin Resource Sharing (CORS) is a security mechanism implemented by web browsers to prevent web pages from making cross-origin requests to resources hosted on other domains. By default, browsers block such requests for security reasons, but there are cases where it's necessary to allow cross-origin requests, such as when building a web API.

To enable CORS in an Express.js application, you can create a custom middleware function that adds the necessary headers to the response. Here's an example of a middleware function that enables CORS:

```javascript
function enableCORS(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
}

app.use(enableCORS);
```

In this example, the `enableCORS` middleware function sets the `Access-Control-Allow-Origin`, `Access-Control-Allow-Methods`, and `Access-Control-Allow-Headers` headers on the response. The `Access-Control-Allow-Origin` header allows any domain to make cross-origin requests to the server. The `Access-Control-Allow-Methods` header specifies which HTTP methods are allowed for cross-origin requests. The `Access-Control-Allow-Headers` header lists the additional headers that are allowed for cross-origin requests.

The `enableCORS` middleware function also checks if the request method is `OPTIONS`. If so, it sends a `200` status code to the client, indicating that the server accepts cross-origin requests. If the request method is not `OPTIONS`, the middleware calls the `next` function to pass control to the next middleware function in the chain.

By adding this middleware function to your Express.js application, you can enable cross-origin requests and allow web pages hosted on other domains to access your API.
