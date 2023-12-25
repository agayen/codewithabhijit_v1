---
sidebar_position: 3
title:  Week 2 | Web development
description: Basic Web Development HTML and CSS
keywords:   ['html', 'css','basic web development','syllabus']
---

## Formatting Text with HTML Tags

HTML provides a variety of tags that allow you to format and style text on a web page. These tags help you control the appearance, emphasis, and structure of your content. Let's explore some commonly used HTML tags for formatting text:

### Bold Text: `<b>` and `<strong>`
The `<b>` tag and the `<strong>` tag are used to make text bold. They have a similar visual effect, but the `<strong>` tag also carries semantic importance, indicating strong emphasis. Here's an example:

```html
<b>This text is bold.</b>
<strong>This text is also bold and carries strong emphasis.</strong>
```

### Italic Text: `<i>` and `<em>`
The `<i>` tag and the `<em>` tag are used to make text italic. Similar to the `<b>` and `<strong>` tags, the `<em>` tag carries semantic importance, indicating emphasis. Here's an example:

```html
<i>This text is italic.</i>
<em>This text is also italic and carries emphasis.</em>
```

### Underlined Text: `<u>`
The `<u>` tag is used to underline text. However, it is worth noting that underlining text is generally discouraged for regular content because it is often associated with hyperlinks. Here's an example:

```html
<u>This text is underlined.</u>
```

### Strikethrough Text: `<s>` and `<del>`
The `<s>` tag and the `<del>` tag are used to display text with a strikethrough effect. They indicate that the text has been deleted or is no longer valid. Here's an example:

```html
<s>This text has a strikethrough effect.</s>
<del>This text is also displayed with a strikethrough effect.</del>
```

### Superscript and Subscript: `<sup>` and `<sub>`
The `<sup>` tag is used to display text in superscript, appearing above the regular line of text. The `<sub>` tag is used for subscript, appearing below the regular line. Here's an example:

```html
E = mc<sup>2</sup> (Superscript)
H<sub>2</sub>O (Subscript)
```

### Marked or Highlighted Text: `<mark>`
The `<mark>` tag is used to highlight or mark specific sections of text. It is commonly used to draw attention to important or highlighted content. Here's an example:

```html
<p>This is an example of <mark>highlighted</mark> text.</p>
```

These are just a few examples of HTML tags that can be used to format text on a web page. By combining these tags and using CSS for further styling, you can create visually appealing and well-structured content. Experiment with these tags and explore other HTML tags to enhance the formatting of your text as per your design requirements.

## Creating Lists in HTML

HTML provides two types of lists: ordered and unordered. Lists are useful for organizing and presenting information in a structured manner. Here's how you can create ordered and unordered lists:

### Unordered Lists: `<ul>`
Unordered lists are typically used when the order of the list items is not important. Each list item is preceded by a bullet point. To create an unordered list, use the `<ul>` tag, and wrap each list item with the `<li>` tag. Here's an example:

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

This will render as:
- Item 1
- Item 2
- Item 3

### Ordered Lists: `<ol>`
Ordered lists are used when the order of the list items matters. Each list item is automatically assigned a number or letter. To create an ordered list, use the `<ol>` tag, and wrap each list item with the `<li>` tag. Here's an example:

```html
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
```

This will render as:
1. First item
2. Second item
3. Third item

### Nested Lists
You can also nest lists within each other to create hierarchical structures. Simply place a new `<ul>` or `<ol>` tag within an existing `<li>` element. Here's an example of a nested list:

```html
<ul>
  <li>Item 1</li>
  <li>Item 2
    <ul>
      <li>Nested Item 1</li>
      <li>Nested Item 2</li>
    </ul>
  </li>
  <li>Item 3</li>
</ul>
```

This will render as:
- Item 1
- Item 2
  - Nested Item 1
  - Nested Item 2
- Item 3

By default, both ordered and unordered lists have a specific style and appearance. You can further customize their appearance using CSS to match your desired design.

Remember to use the appropriate list type (`<ul>` for unordered and `<ol>` for ordered), wrap each list item with `<li>` tags, and nest lists when necessary. Lists are a great way to structure and organize content on your web page, making it easier for visitors to read and understand information.

## Adding Links and Anchors in HTML

HTML provides the `<a>` tag to create links and anchors within your web pages. Links allow users to navigate to other web pages or resources, while anchors enable users to jump to specific sections within the same page. Here's how you can add links and anchors in HTML:

### Creating Links:
To create a link, use the `<a>` tag, and set the `href` attribute to the URL or file path of the destination. Here's an example of a basic link:

```html
<a href="https://www.google.com">Visit Google Website</a>
```

In the Example above, the text "Visit Google Website" will be displayed as a clickable link. When clicked, it will take the user to the specified URL.

### Linking to Local Files:
You can also link to files within your website's directory by providing the relative file path. For example:

```html
<a href="images/image.jpg">View Image</a>
```

In this case, clicking on the link will open the "image.jpg" file located in the "images" directory relative to the current page.

### Adding Anchors:
Anchors, also known as named anchors or fragment identifiers, allow users to jump to specific sections within a page. To create an anchor, place the `<a>` tag with the `name` attribute at the desired location within the page. Here's an example:

```html
<a name="section1"></a>
<h2>Section 1</h2>
<p>This is the content of section 1.</p>
```

In the example above, the anchor is placed before the heading `<h2>`. To link to this anchor from another part of the page, use the `<a>` tag with the `href` attribute set to "#section1". For example:

```html
<a href="#section1">Go to Section 1</a>
```

When clicked, this link will scroll the page to the section with the specified anchor.

Opening Links in a New Window/Tab:
By default, links open in the same window or tab. If you want a link to open in a new window or tab, add the `target="_blank"` attribute to the `<a>` tag. For example:

```html
<a href="https://www.example.com" target="_blank">Visit Example Website</a>
```

This will open the linked website in a new window or tab when clicked.

Remember to properly format your links with the `<a>` tag, setting the appropriate `href` attribute for the destination URL or file path. Use anchors with the `name` attribute to create jump links within the same page. Adding links and anchors enhances navigation and allows users to access relevant content on your website.


### Working with Images and Image Attributes in HTML

HTML allows you to easily display images on your web pages using the `<img>` tag. This tag requires certain attributes to specify the source and properties of the image. Here's how you can work with images in HTML:

### Adding an Image:
To add an image to your web page, use the `<img>` tag. Set the `src` attribute to the URL or file path of the image you want to display. Here's an example:

```html
<img src="image.jpg" alt="Description of the image">
```

In the example above, "image.jpg" is the file path or URL of the image you want to display. The `alt` attribute provides alternative text that is displayed if the image cannot be loaded or for accessibility purposes.

### Image Source (`src`) Attribute:
The `src` attribute specifies the source (URL or file path) of the image. It can be a relative path to an image file within your website's directory or an absolute URL. Here are examples of both cases:

Relative path:
```html
<img src="images/image.jpg" alt="Description of the image">
```

Absolute URL:
```html
<img src="https://www.example.com/image.jpg" alt="Description of the image">
```

### Alternative Text (`alt`) Attribute:
The `alt` attribute provides alternative text for the image. It is important for accessibility as it describes the image for users who may not be able to see it, or for search engines that index your page. It should be concise and descriptive. Here's an example:

```html
<img src="image.jpg" alt="A beautiful sunset over the mountains">
```

### Image Dimensions (`width` and `height`) Attributes:
You can specify the width and height of the image using the `width` and `height` attributes. These attributes define the image's display size in pixels. It is recommended to provide the dimensions to help the browser layout the page properly, even if the image is initially displayed at a different size due to CSS or responsive design. Here's an example:

```html
<img src="image.jpg" alt="Description of the image" width="500" height="300">
```

### Image Alignment (`align`) Attribute:
The `align` attribute allows you to align the image horizontally within its container. However, it is no longer recommended to use this attribute, as it is considered outdated. Instead, you can use CSS for precise alignment. Here's an example of the `align` attribute:

```html
<img src="image.jpg" alt="Description of the image" align="left">
```

These are some of the common attributes used with the `<img>` tag. Remember to replace "image.jpg" with the correct image file path or URL, and provide appropriate alternative text for accessibility. Adjust the width, height, and alignment attributes as needed. Adding images enhances the visual appeal and engagement of your web pages.

## Creating Tables and Table Attributes in HTML

HTML provides the `<table>` tag to create tables on web pages. Tables are useful for organizing and presenting tabular data in a structured format. Here's how you can create tables and use table attributes in HTML:

### Creating a Table:
To create a table, use the `<table>` tag. Within the `<table>` tags, you define the structure of the table using additional tags. The basic structure includes `<tr>` (table row) for each row and `<td>` (table data/cell) for each cell within the row. Here's an example of a simple table with two rows and two columns:

```html
<table>
  <tr>
    <td>Cell 1,1</td>
    <td>Cell 1,2</td>
  </tr>
  <tr>
    <td>Cell 2,1</td>
    <td>Cell 2,2</td>
  </tr>
</table>
```

In the example above, each `<tr>` tag represents a row, and each `<td>` tag represents a cell within that row. The content of the cells can be any HTML elements.

### Table Headers:
To designate the first row as the table header, use the `<th>` (table header) tag instead of `<td>`. This visually differentiates the header cells from the data cells. Here's an example:

```html
<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Cell 1,1</td>
    <td>Cell 1,2</td>
  </tr>
  <tr>
    <td>Cell 2,1</td>
    <td>Cell 2,2</td>
  </tr>
</table>
```

### Table Attributes:
HTML provides various attributes to customize the appearance and behavior of tables. Some commonly used attributes include:

- `border`: Specifies the width of the table borders. For example: `<table border="1">` sets a border width of 1 pixel.
- `cellspacing`: Specifies the space between cells. For example: `<table cellspacing="10">` sets a spacing of 10 pixels.
- `cellpadding`: Specifies the space between the cell content and cell borders. For example: `<table cellpadding="5">` sets a padding of 5 pixels.
- `width`: Specifies the width of the table. For example: `<table width="500">` sets the table width to 500 pixels.
- `colspan` and `rowspan`: These attributes allow a cell to span multiple columns or rows. For example: `<td colspan="2">` spans the cell across two columns.

Here's an example of a table with some of these attributes applied:

```html
<table border="1" cellspacing="10" cellpadding="5" width="500">
  <tr>
    <th colspan="2">Header</th>
  </tr>
  <tr>
    <td>Cell 1,1</td>
    <td>Cell 1,2</td>
  </tr>
  <tr>
    <td>Cell 2,1</td>
    <td>Cell 2,2</td>
  </tr>
</table>
```

These attributes help control the visual presentation and layout of the table.

Tables are a powerful tool for displaying structured data. Experiment with different attributes and elements within the `<table>` tag to customize the appearance and functionality of your tables.

