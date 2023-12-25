---
sidebar_position: 2
title:  Week 1 | Web development
description: Basic Web Development HTML and CSS
keywords:   ['html', 'css','basic web development','syllabus']
---

## Introduction to Web Development

Welcome to the world of web development! In this course, we will embark on an exciting journey into the realm of creating websites using HTML and CSS. Web development is a rapidly evolving field that plays a crucial role in our digital age. Understanding the fundamentals of web development will empower you to bring your ideas to life, express your creativity, and contribute to the ever-expanding online landscape.

### What is Web Development?
Web development refers to the process of creating websites or web applications that can be accessed through the internet. It involves a combination of programming languages, design principles, and technical skills to build functional and visually appealing websites. Web development encompasses various aspects, including front-end development, back-end development, and web design.

### Front-End Development:
Front-end development focuses on the visual and interactive elements of a website that users see and interact with directly. It involves using HTML (Hypertext Markup Language), CSS (Cascading Style Sheets), and JavaScript to structure and style web pages, create layouts, and add interactivity.

### Back-End Development:
Back-end development involves the server-side of web development. It deals with the behind-the-scenes functionality, data management, and server-side scripting required to power dynamic websites or web applications. Back-end technologies commonly include programming languages like Python, PHP, Ruby, or Node.js, and databases like MySQL or MongoDB.

### Web Design:
Web design is the art of creating visually appealing and user-friendly interfaces for websites. It encompasses principles of graphic design, typography, color theory, and user experience (UX) design. Web designers often work hand in hand with front-end developers to create seamless user experiences and captivating designs.

### Why Learn HTML and CSS?
HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets) are the backbone of web development. HTML is used to structure the content of web pages, while CSS is used to style and format the elements on those pages. These two languages are the building blocks that enable us to create beautifully designed and interactive websites.

Throughout this course, you will learn the basics of HTML and CSS, which will provide you with a strong foundation for web development. You will discover how to create the structure of web pages, format text, add images, create navigation menus, and apply styling to make your websites visually appealing.

### Web Development Skills and Opportunities:
By mastering the basics of web development, you open the door to a wide range of opportunities. Whether you aspire to become a professional web developer, freelance web designer, or want to create your own personal or business website, the skills you gain in this course will set you on the right path.

Web development is a dynamic field with constant advancements. As you progress, you may choose to expand your skills and delve into areas such as responsive web design, JavaScript, front-end frameworks, or back-end development. The possibilities are endless, and this course serves as a stepping stone towards your future growth in web development.

Get ready to unlock your creativity, unleash your potential, and embark on an exciting journey into the world of web development. Let's dive in and start building amazing websites together!

## Understanding the Structure of a Web Page

When you visit a website, have you ever wondered how it is organized and structured? Web pages are composed of various elements that work together to create a cohesive and functional layout. In this section, we will explore the fundamental structure of a web page and understand how its different components fit together.

### Document Type Declaration (`<!DOCTYPE>`):
Every web page begins with a Document Type Declaration, commonly known as the doctype. It is an HTML declaration that informs the web browser about the version of HTML being used in the document. The doctype declaration ensures that the browser renders the page correctly.

### HTML Tag:
Following the doctype, the HTML tag serves as the root element of an HTML document. It encompasses the entire content of the web page.

### Head Section (`<head>`):
Inside the HTML tags, we have the head section, which contains metadata and other non-visible information about the web page. It includes elements like the page title, character encoding declaration, linked CSS files, JavaScript references, and more. The content within the head section is not directly visible on the web page itself.

### Body Section (`<body>`):
The body section is where the visible content of the web page resides. It encapsulates all the elements that users see and interact with. This is where we define the structure, layout, and styling of the web page using HTML tags and CSS.

### Header Section (`<header>`):
Within the body section, we can have a header section that typically appears at the top of the web page. The header often contains branding elements, logos, navigation menus, and introductory content.

### Navigation Section (`<nav>`):
The navigation section is specifically used to define the primary navigation menu of the website. It usually contains links that allow users to navigate between different sections or pages of the website.

### Main Content Section (`<main>`):
The main content section holds the central content of the web page. It includes the main text, images, videos, forms, or any other content that provides the primary information or functionality of the page.

### Sidebar Section (`<aside>`):
The sidebar section, often positioned alongside the main content, provides supplementary information, advertisements, related links, or other secondary content that complements the main content.

### Footer Section (`<footer>`):
The footer section appears at the bottom of the web page and typically contains copyright information, contact details, sitemap links, or additional navigational elements.

Understanding the structure of a web page is crucial for building well-organized and accessible websites. By properly structuring your content using HTML tags, you create a logical hierarchy that aids in search engine optimization (SEO) and improves the overall user experience.

As you progress in web development, you'll learn to use various HTML tags, CSS styling techniques, and JavaScript interactions to enhance the structure and functionality of your web pages. Remember that the structure of a web page sets the foundation for a successful and user-friendly website.

## Introduction to HTML Tags and Elements

HTML (Hypertext Markup Language) is the backbone of web development. It provides the structure and organization for web pages, allowing us to define the various elements and content that make up a website. In this section, we will introduce you to HTML tags and elements, which form the building blocks of an HTML document.

### HTML Tags:
HTML tags are the markup elements used to define the structure and content of a web page. They are enclosed in angle brackets (`< >`) and typically come in pairs—an opening tag and a closing tag. The opening tag denotes the beginning of an element, while the closing tag marks the end of the element. The content placed between the opening and closing tags is affected by the properties and attributes associated with the specific tag.

### HTML Elements:
HTML elements are created using HTML tags. An element consists of the opening and closing tags along with the content nested between them. It represents a specific type of structure or content within the web page. For example, a paragraph element is created using the `<p>` opening tag and the `</p>` closing tag, with the actual paragraph content placed in between.

Here are some commonly used HTML tags and elements:

- **Headings :**
    Headings represent the hierarchical structure of the content on a web page. There are six levels of headings, from `<h1>` (the highest) to `<h6>` (the lowest). The `<h1>` tag represents the main heading, while the `<h2>` to `<h6>` tags represent subheadings.

- **Paragraphs :**
    Paragraphs are used to structure and display blocks of text. They are created using the `<p>` opening tag and the `</p>` closing tag. Any text or content placed between these tags will be displayed as a paragraph.

-  **Links :**
    Links, also known as anchors, allow users to navigate to other web pages or specific sections within the same page. They are created using the `<a>` opening tag and the `</a>` closing tag. The URL or destination of the link is specified using the href attribute within the opening tag.

- **Images :**
    Images are used to display visual content on a web page. They are created using the `<img>` tag and require the src attribute to specify the source or location of the image file. Additional attributes, such as alt (alternative text) and width/height, can be used to provide alternative text descriptions and set the image dimensions.

- **Lists :**
Lists are used to present information in an organized manner. There are two types of lists: ordered lists (`<ol>`) and unordered lists (`<ul>`). Within these list elements, list items are created using the `<li>` tag. Ordered lists display numbered items, while unordered lists display bulleted items.

- **Tables :**
Tables are used to display tabular data in rows and columns. They are created using the `<table>` tag, and the table structure is defined using additional tags such as `<tr>` (table row), `<th>` (table header), and `<td>` (table data cell).

These are just a few examples of HTML tags and elements that you can use to structure and present content on a web page. As you progress in your web development journey, you will discover many more tags and elements that offer additional functionality and styling options.

Remember, HTML is a markup language that provides structure to your content, while CSS is used for styling and visual presentation. By mastering HTML tags and elements, you can create well-structured and semantically meaningful web pages that are both user-friendly and accessible.

Creating a Basic HTML Document

## To create a basic HTML document, follow these steps:

### Step 1: Set Up the Document Structure
Open a text editor of your choice (e.g., Notepad, Sublime Text, Visual Studio Code) and create a new file. Save the file with an `.html` extension, such as `index.html`. This extension indicates that the file contains HTML code.

### Step 2: Start with the Document Type Declaration
The first line of your HTML document should be the document type declaration. It informs the browser about the version of HTML you are using. For HTML5, the declaration is as follows:

```html
<!DOCTYPE html>
```

### Step 3: Add the HTML Document Structure
After the document type declaration, add the opening and closing `<html>` tags. The entire content of the web page will be enclosed within these tags.

```html
<!DOCTYPE html>
<html>
</html>
```

### Step 4: Include the Head Section
Within the `<html>` tags, add the opening and closing `<head>` tags. The head section contains metadata and other non-visible information about the web page, such as the page title, linked CSS files, and JavaScript references.

```html
<!DOCTYPE html>
<html>
<head>
</head>
</html>
```

### Step 5: Define the Page Title
Within the `<head>` tags, add the opening and closing `<title>` tags. The text placed between these tags will be displayed as the title of the web page in the browser's title bar or tab.

```html
<!DOCTYPE html>
<html>
<head>
<title>My First Web Page</title>
</head>
</html>
```

### Step 6: Include the Body Section
After the `<head>` section, add the opening and closing `<body>` tags. The body section contains the visible content of the web page, such as text, images, links, and other elements.

```html
<!DOCTYPE html>
<html>
<head>
<title>My First Web Page</title>
</head>
<body>
</body>
</html>
```

### Step 7: Add Content to the Body Section
Within the `<body>` tags, you can start adding content to your web page. For example, you can add a heading, paragraph, or an image using various HTML tags.

```html
<!DOCTYPE html>
<html>
<head>
<title>My First Web Page</title>
</head>
<body>
<h1>Welcome to My First Web Page</h1>
<p>This is a basic HTML document.</p>
<img src="image.jpg" alt="My Image">
</body>
</html>
```

### Step 8: Save and View the Web Page
Save your HTML document, and you can now open it in a web browser to see the result. Double-click the `.html` file, and the browser will render and display your web page.

Congratulations! You have created a basic HTML document. You can continue to add more content, structure, and styling to your web page using additional HTML tags and CSS.

## Working with Headings, Paragraphs, and Line Breaks

In HTML, headings, paragraphs, and line breaks are essential elements for organizing and formatting text content on a web page. They allow you to structure your content, create meaningful sections, and control the flow of text. Let's explore how to work with these elements:

### Headings
HTML provides six levels of headings, from `<h1>` to `<h6>`. The `<h1>` tag represents the highest level of heading, typically used for the main title or heading of the page. The `<h2>` to `<h6>` tags represent subheadings of decreasing importance. Here's an example of how to use headings:

```html
<h1>This is the Main Heading</h1>
<h2>This is a Subheading</h2>
<h3>Another Subheading</h3>
```

### Paragraphs
Paragraphs are used to structure and display blocks of text. They are created using the `<p>` tag. Any text or content placed between the opening and closing `<p>` tags will be displayed as a paragraph. Here's an example:

```html
<p>This is a paragraph of text. It provides some information or description about a specific topic.</p>
```

### Line Breaks
Line breaks allow you to create new lines within a paragraph or other block-level elements. They are created using the `<br>` tag. Unlike other HTML tags, the `<br>` tag does not require a closing tag. Here's an example:

```html
<p>This is the first line of text.<br>
This is the second line of text.</p>
```

Using headings, paragraphs, and line breaks together, you can create structured and readable content on your web page. Here's a complete example:

```html
<!DOCTYPE html>
<html>
<head>
<title>My Web Page</title>
</head>
<body>
<h1>Welcome to My Web Page</h1>
<h2>About Me</h2>
<p>I am a web developer passionate about creating beautiful and functional websites.</p>
<h3>Skills</h3>
<p>My skills include HTML, CSS, JavaScript, and responsive web design.</p>
<p>I am also experienced in using frameworks like Bootstrap and libraries like jQuery.</p>
<h2>Contact</h2>
<p>You can reach me at example@example.com</p>
</body>
</html>
```

Remember to save your HTML file and open it in a web browser to see how the headings, paragraphs, and line breaks are rendered. You can adjust the content and formatting according to your needs and continue building upon this foundation as you develop your web page further.