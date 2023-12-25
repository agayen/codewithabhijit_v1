---
sidebar_position: 3
title: ORM libraries
description: ORM libraries Sequelize and Sequelize
keywords:   [' ORM libraries Sequelize and Mongoose', 'ExpressJs','Sequelize','Sequelize']
---



Object Relational Mapping (ORM) is a programming technique that allows you to interact with databases using object-oriented programming concepts instead of SQL statements. In an Express.js application, you can use ORM libraries like Sequelize and Mongoose to interact with databases.

Here's an overview of how to use Sequelize and Mongoose in an Express.js application:

## Sequelize

Sequelize is an ORM library for Node.js that supports several databases including MySQL, PostgreSQL, and SQLite. To use Sequelize in your Express.js application, you'll need to install the `sequelize` package using npm:

```
npm install sequelize
```

Once you have installed Sequelize, you can create a Sequelize instance and define your models. Here's an example:

```javascript
const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'mysql'
});

const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});

sequelize.sync()
  .then(() => {
    console.log('Database synced');
  });
```

In the above code, we create a Sequelize instance and define a `user` model with two fields (`firstName` and `lastName`). We then call `sequelize.sync()` to synchronize the model with the database.

Once you have defined your models, you can use Sequelize to perform CRUD operations on your database. Here's an example of how to create a new user:

```javascript
User.create({
  firstName: 'John',
  lastName: 'Doe'
}).then(user => {
  console.log(user.toJSON());
});
```

## Mongoose

Mongoose is an ORM library for MongoDB that provides a schema-based solution to model your application data. To use Mongoose in your Express.js application, you'll need to install the `mongoose` package using npm:

```
npm install mongoose
```

Once you have installed Mongoose, you can create a Mongoose instance and define your schemas. Here's an example:

```javascript
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String
});

const User = mongoose.model('User', userSchema);
```

In the above code, we create a Mongoose instance and define a `user` schema with two fields (`firstName` and `lastName`). We then create a `User` model using the schema.

Once you have defined your models, you can use Mongoose to perform CRUD operations on your database. Here's an example of how to create a new user:

```javascript
const user = new User({
  firstName: 'John',
  lastName: 'Doe'
});

user.save((err, user) => {
  if (err) return console.error(err);
  console.log(user.toJSON());
});
```

In the above code, we create a new `User` instance and call the `save()` method to save it to the database.