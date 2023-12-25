---
sidebar_position: 3
title: Request and response formatting (JSON, XML)
description: Request and response formatting (JSON, XML) in ExpressJs
keywords:  ['Request and response formatting (JSON, XML)', 'JSON','XML','ExpressJs','Request in ExpressJs','Response in ExpressJs']
---


In Express.js, it is easy to format the request and response in various formats including JSON and XML. 

To format the request and response in JSON, we don't need to do anything as Express.js automatically parses the request body as JSON if the request header's content-type is set to application/json. We can simply use `res.json()` method to send the response in JSON format. 

Here's an example:

```javascript
const express = require('express');
const app = express();

app.use(express.json()); // to parse incoming requests with JSON payloads

app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com' },
  ];

  res.json(users); // send response in JSON format
});

app.listen(3000, () => console.log('Server started on port 3000'));
```

To format the response in XML, we can use a package like `xmlbuilder` or `xml2js`. Here's an example using `xmlbuilder`:

```javascript
const express = require('express');
const xmlbuilder = require('xmlbuilder');

const app = express();

app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com' },
  ];

  const xml = xmlbuilder.create('users');
  users.forEach(user => {
    xml.ele('user', { id: user.id })
      .ele('name', user.name).up()
      .ele('email', user.email).up()
      .up();
  });

  res.set('Content-Type', 'application/xml');
  res.send(xml.toString()); // send response in XML format
});

app.listen(3000, () => console.log('Server started on port 3000'));
```

In this example, we're using `xmlbuilder` to create an XML document with the `users` root element and `user` child elements for each user. We then set the content-type header to `application/xml` and send the XML document as the response.