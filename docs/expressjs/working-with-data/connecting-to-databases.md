---
title: Connecting to databases
description: Connecting to databases Mysql, MongoDB
keywords:
  ["Connecting to databases Mysql, MongoDB ", "ExpressJs", "Mysql", "MongoDB"]
---

## Connecting to databases MySQL

Connecting to MySQL database in Express.js involves the use of a MySQL driver, which allows the application to interact with the database. The following are the steps involved in connecting to a MySQL database in Express.js:

1. Install the MySQL driver using NPM:

```bash
npm install mysql
```

2. Import the MySQL driver in your Express.js application:

```javascript title='app.js'
const mysql = require("mysql");
```

3. Create a MySQL connection pool:

```javascript title='app.js'
const connection = mysql.createConnection({
  host: "localhost",
  user: "dbuser",
  password: "s3kreee7",
  database: "my_db",
});

connection.connect();
```

4. Use the connection pool to execute queries:

```javascript title='app.js'
connection.query("SELECT * FROM users", (error, results, fields) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(results);
});
```

The `connection.query` method is used to execute SQL queries on the MySQL database. The first argument is the SQL query, and the second argument is a callback function that is called when the query is complete. The `results` parameter of the callback function contains the results of the query.

By using a connection pool, multiple connections to the database can be established simultaneously, which can improve the performance of the application.

## Connecting to databases MongoDB

Connecting to MongoDB in an Express.js application involves the following steps:

1. Install the MongoDB driver for Node.js using npm:

   ```bash
   npm install mongodb
   ```

2. In your Express.js application, import the MongoDB driver:

   ```javascript title='app.js'
   const { MongoClient } = require("mongodb");
   ```

3. In your Express.js application, create a MongoDB client and connect to your MongoDB database:

   ```javascript title='app.js'
   const uri =
     "mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority";
   const client = new MongoClient(uri);
   async function run() {
     try {
       const database = client.db("sample_mflix");
       const movies = database.collection("movies");

       const query = { title: "Back to the Future" };
       const movie = await movies.findOne(query);

       console.log(movie);
     } finally {
       await client.close();
     }
   }
   run().catch(console.dir);
   ```

   In the above code, replace `<username>` with your MongoDB Atlas username, `<password>` with your MongoDB Atlas password, `<cluster>` with the name of your MongoDB Atlas cluster, and `<dbname>` with the name of your MongoDB database.

4. Once you have connected to your MongoDB database, you can perform CRUD (create, read, update, delete) operations on your MongoDB collections using the collection object returned by the `client.db()` method.

For example, to insert a document into a collection:

```javascript title='app.js'
collection.insertOne({ name: "John", age: 30 });
```

To find documents in a collection:

```javascript title='app.js'
collection.find({ name: "John" }).toArray(function (err, result) {
  if (err) throw err;
  console.log(result);
});
```

To update a document in a collection:

```javascript title="app.js"
collection.updateOne({ name: "John" }, { $set: { age: 40 } });
```

To delete a document from a collection:

```javascript title="app.js"
collection.deleteOne({ name: "John" });
```

Note that in the above examples, `collection` is the object returned by the `client.db().collection()` method.
