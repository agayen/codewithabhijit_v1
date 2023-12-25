---
sidebar_position: 3
title: Templating engines
description:  Templating engines (Handlebars, Pug) In expressJS
keywords:   ['Templating engines', 'ExpressJs','Handlebars','Pug']
---

Templating engines are a way to dynamically generate HTML content on the server-side. In an Express.js application, you can use templating engines like Handlebars and Pug to render views that include dynamic data.

Handlebars is a popular templating engine that uses a syntax similar to HTML. With Handlebars, you can define templates that include placeholders for data, called variables. The template is compiled on the server-side to produce the final HTML output, which is sent to the client.

## Handlebars

Here's an example of how to use Handlebars in an Express.js application:

- *Install the `handlebars` and `express-handlebars` packages:*

    ```javascript
    npm install handlebars express-handlebars
    ```

- *Set the view engine to Handlebars:*

    ```javascript title='app.js'
    const express = require('express');
    const exphbs  = require('express-handlebars');
    const app = express();

    app.engine('handlebars', exphbs());
    app.set('view engine', 'handlebars');
    ```

- *Create a Handlebars template in the `views` directory:*

    ```handlebars title='views/home.handlebars'
    <!-- views/home.handlebars -->
    <!DOCTYPE html>
    <html>
    <head>
        <title>{{title}}</title>
    </head>
    <body>
        <h1>{{heading}}</h1>
        <p>{{message}}</p>
    </body>
    </html>
    ```

- Render the template in an Express.js route handler:

    ```javascript title='app.js'
    app.get('/', function (req, res) {
    res.render('home', { 
        title: 'Home Page', 
        heading: 'Welcome to my website', 
        message: 'This is a sample message' 
    });
    });
    ```

In this example, the Handlebars template includes three variables: `title`, `heading`, and `message`. The values for these variables are passed as an object to the `res.render()` method. When the client requests the `/` route, the server renders the `home` template with the provided data and sends the resulting HTML to the client.

## PUG

Pug (formerly known as Jade) is another popular templating engine for Express.js. It uses indentation to define the structure of the HTML and supports dynamic data through embedded JavaScript code. Here's an example of how to use Pug in an Express.js application:

- *Install the `pug` package:*

    ```bash
    npm install pug
    ```

- *Set the view engine to Pug:*

    ```javascript title='app.js'
    const express = require('express');
    const app = express();

    app.set('view engine', 'pug');
    ```

-  *Create a Pug template in the `views` directory:*

    ```pug title='views/home.pug'
    // views/home.pug
    doctype html
    html
    head
        title= title
    body
        h1= heading
        p= message
    ```

4. Render the template in an Express.js route handler:

    ```javascript title='app.js'
    app.get('/', function (req, res) {
    res.render('home', { 
        title: 'Home Page', 
        heading: 'Welcome to my website', 
        message: 'This is a sample message' 
        });
    });
    ```

In this example, the Pug template uses indentation to define the HTML structure, and includes variables like `title`, `heading`, and `message` using the `=` syntax. The `res.render()` method is used to render the `home` template with the provided data and send the resulting HTML to the client.

Both Handlebars and Pug are powerful templating engines that can help you create dynamic views in an Express.js application. By using a templating engine, you can separate the presentation logic from the business logic of your application, making it easier to maintain and modify your code.