---
sidebar_position: 4
title: Authentication and security measures (JWT, Passport)
description: Authentication and security measures (JWT, Passport) in ExpressJs
keywords:   ['Authentication and security measures (JWT, Passport)', 'JWT', 'Passport','ExpressJs','Authentication','security','JWT', 'Passport']
---



Authentication and security are important aspects of any web application, and in Express.js, there are several popular authentication and security measures that can be implemented. Two commonly used measures are JSON Web Tokens (JWT) and Passport.js.

JWT is a standard for securely transmitting information between parties. In a web application context, it can be used for authentication and authorization. When a user logs in, the server creates a JWT token, which is then sent back to the client. The client can then use this token for future authenticated requests, which the server can verify and grant access accordingly.

To use JWT in Express.js, you can use the `jsonwebtoken` package. Here's an example of how to generate a JWT token:

```javascript
const jwt = require('jsonwebtoken');

const payload = {
  id: 123,
  email: 'user@example.com'
};

const secret = 'mysecretkey';

const token = jwt.sign(payload, secret, { expiresIn: '1h' });
```

In this example, the `jwt.sign()` method is used to create a token with the payload containing the user's ID and email. The `secret` parameter is a secret key that should be kept secure on the server. The `expiresIn` option specifies how long the token should be valid for.

Passport.js is a popular authentication middleware for Node.js and Express.js. It provides a flexible and modular approach to authentication by allowing developers to choose from a variety of authentication strategies, including local authentication with username and password, social authentication with OAuth, and more.

To use Passport.js in Express.js, you can start by installing the `passport` and `passport-local` packages:

```
npm install passport passport-local
```

Here's an example of how to configure Passport.js with local authentication:

```javascript
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Configure the local strategy
passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, (email, password, done) => {
  // Find the user with the given email
  User.findOne({ email: email }, (err, user) => {
    if (err) { return done(err); }
    if (!user) { return done(null, false, { message: 'Incorrect email or password.' }); }
    if (!user.validPassword(password)) { return done(null, false, { message: 'Incorrect email or password.' }); }
    return done(null, user);
  });
}));

// Serialize and deserialize user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

// Middleware to check if user is authenticated
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

// Login route
app.post('/login', passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/login',
  failureFlash: true
}));

// Dashboard route
app.get('/dashboard', isAuthenticated, (req, res) => {
  res.render('dashboard', { user: req.user });
});
```

In this example, the local strategy is configured with the `passport-local` package. The `User` model is assumed to have a `validPassword()` method to validate the user's password. The `serializeUser()` and `deserializeUser()` methods are used to serialize and deserialize the user object for the session. The `isAuthenticated()` middleware checks if the user is authenticated before allowing access to the dashboard route. The `passport.authenticate()` middleware is used to authenticate the