---
sidebar_position: 4
title:  Week 3 | Web development
description: Basic Web Development HTML and CSS
keywords:   ['html', 'css','basic web development','syllabus']
---


## Introduction to CSS (Cascading Style Sheets)

CSS, short for Cascading Style Sheets, is a language used to define the visual appearance and layout of HTML documents. It allows you to control the colors, fonts, spacing, and other stylistic aspects of your web pages. By separating the content (HTML) from its presentation (CSS), you can maintain consistency across multiple pages and easily make global style changes. Here are some key concepts and features of CSS:

### Selectors
CSS selectors are used to target specific HTML elements that you want to style. Selectors can be based on element types, classes, IDs, attributes, and more. For example:
   - Element selector: `p` targets all `<p>` elements.
   - Class selector: `.highlight` targets all elements with the class "highlight".
   - ID selector: `#header` targets the element with the ID "header".

### Properties and Values
CSS properties define the specific style rules you want to apply, and values determine the settings for those properties. For example:
   - Property: `color` sets the text color.
   - Value: `red` sets the text color to red.

### Style Rules
CSS style rules consist of one or more properties and their corresponding values. Multiple rules can be applied to the same selector. For example:
   ```css
   p {
     color: blue;
     font-size: 16px;
   }
   ```

### Internal and External CSS
CSS can be written directly within an HTML document using `<style>` tags (internal CSS), or it can be defined in a separate CSS file and linked to the HTML document using the `<link>` tag (external CSS). External CSS is typically preferred for larger projects as it allows for better organization and easier maintenance.

### CSS Box Model
The CSS box model describes how elements are structured and how their dimensions and spacing are calculated. It consists of the content area, padding, border, and margin. Understanding the box model is important for layout and positioning.

### Responsive Design
CSS enables responsive web design, allowing you to create layouts that adapt to different screen sizes and devices. Media queries, flexbox, and grid layout are some of the CSS features used for responsive design.

### CSS Frameworks
CSS frameworks like Bootstrap and Foundation provide pre-defined CSS styles and components to streamline web development. They offer a responsive grid system, typography, buttons, forms, and other ready-to-use UI elements.

### Browser Compatibility
CSS is supported by all modern web browsers. However, different browsers may interpret and render CSS rules slightly differently, which can lead to inconsistencies. It's important to test your CSS styles across multiple browsers to ensure consistent rendering.

CSS is a powerful tool that allows you to transform the appearance of your web pages. By combining HTML for structure and CSS for styling, you can create visually appealing and engaging websites.


## Inline CSS, internal CSS, and external CSS

Inline CSS, Internal CSS, and External CSS are three different methods of applying CSS styles to HTML documents. Each method has its own purpose and usage. Here's an explanation of each:

### Inline CSS:
Inline CSS is applied directly to individual HTML elements using the `style` attribute. With inline CSS, the styles are defined within the HTML tags themselves. For example:

```html
<p style="color: blue; font-size: 16px;">This is a paragraph with inline CSS.</p>
```

Inline CSS is useful for adding quick and specific styles to individual elements. However, it has limited reusability and can make the HTML code less maintainable when used extensively.

### Internal CSS:
Internal CSS, also known as embedded CSS, is defined within the `<style>` tags in the `<head>` section of an HTML document. The CSS styles defined using internal CSS apply to the entire HTML document or specific sections within it. For example:

```html
<head>
  <style>
    p {
      color: blue;
      font-size: 16px;
    }
  </style>
</head>
<body>
  <p>This is a paragraph with internal CSS.</p>
</body>
```

Internal CSS allows you to apply styles to multiple elements or specific sections of your HTML document. It offers better reusability than inline CSS and keeps the CSS code separate from the HTML structure.

### External CSS:
External CSS involves creating a separate CSS file that is linked to the HTML document using the `<link>` tag. The CSS file contains all the style rules and is saved with a `.css` extension. For example:

HTML file:
```html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <p>This is a paragraph with external CSS.</p>
</body>
```

CSS file (styles.css):
```css
p {
  color: blue;
  font-size: 16px;
}
```

External CSS provides the greatest flexibility and reusability. It allows you to define and maintain all your styles in a separate file, which can be easily linked to multiple HTML documents. It promotes clean code organization and makes it easier to make global style changes.

In summary, inline CSS is used for quick and specific styling, internal CSS is suitable for styles applied to specific HTML documents or sections, and external CSS offers the most flexibility and reusability, making it ideal for larger projects or websites with multiple pages.


## Selectors and Basic Styling Properties in CSS

CSS provides a wide range of selectors and styling properties to target and style HTML elements. Here's an overview of some commonly used selectors and basic styling properties:

### Selectors
- Element Selector: Selects HTML elements by their tag name. For example:
   ```css
   p {
     /* CSS styles for paragraphs */
   }
   ```

- Class Selector: Selects elements with a specific class attribute. For example:
   ```css
   .highlight {
     /* CSS styles for elements with class "highlight" */
   }
   ```

- ID Selector: Selects a specific element with a unique ID attribute. For example:
   ```css
   #header {
     /* CSS styles for an element with ID "header" */
   }
   ```

- Attribute Selector: Selects elements based on their attribute values. For example:
   ```css
   input[type="text"] {
     /* CSS styles for input elements of type "text" */
   }
   ```

- Descendant Selector: Selects elements that are descendants of another element. For example:
   ```css
   div p {
     /* CSS styles for paragraphs within div elements */
   }
   ```

### Styling Properties:
- Color: Sets the color of text. For example:
   ```css
   color: blue;
   ```

- Font: Controls the font properties such as family, size, weight, and style. For example:
   ```css
   font-family: Arial, sans-serif;
   font-size: 16px;
   font-weight: bold;
   font-style: italic;
   ```

- Background: Defines the background properties such as color and image. For example:
   ```css
   background-color: #f0f0f0;
   background-image: url("background.jpg");
   ```

- Margin and Padding: Sets the margin and padding around elements. For example:
   ```css
   margin: 10px;
   padding: 5px;
   ```
- Border: Defines the border properties, including width, style, and color. For example:
   ```css
   border: 1px solid #000;
   ```

- Width and Height: Sets the width and height of elements. For example:
   ```css
   width: 200px;
   height: 150px;
   ```

- Display: Controls the display behavior of elements. For example:
   ```css
   display: block; /* or inline, inline-block, etc. */
   ```

These are just a few examples of selectors and styling properties in CSS. There are many more selectors and a wide range of styling properties available to create customized and visually appealing designs for your web pages.


## Changing text properties (color, size, font)
To change text properties such as color, size, and font in CSS, you can use the following styling properties:

### Color
   - Property: `color`
   - Value: You can specify the color using various formats, including color names, hexadecimal values, RGB values, or HSL values. For example:
     ```css
     color: blue;
     color: #FF0000;
     color: rgb(255, 0, 0);
     color: hsl(0, 100%, 50%);
     ```

### Font Size
   - Property: `font-size`
   - Value: You can set the font size using pixels (`px`), percentages (`%`), em units (`em`), or other relative units. For example:
     ```css
     font-size: 16px;
     font-size: 120%;
     font-size: 1.2em;
     ```

### Font Family
   - Property: `font-family`
   - Value: Specify the font family name or a list of font families in order of preference. If the specified font is not available, the browser will try the next one in the list. For example:
     ```css
     font-family: Arial, sans-serif;
     font-family: "Times New Roman", Times, serif;
     ```

### Font Weight
   - Property: `font-weight`
   - Value: You can set the font weight to `normal`, `bold`, `bolder`, or a specific numeric value. For example:
     ```css
     font-weight: normal;
     font-weight: bold;
     font-weight: 700;
     ```

### Font Style
   - Property: `font-style`
   - Value: Use `normal` for regular text, `italic` for italicized text, or `oblique` for text with a slight slant. For example:
     ```css
     font-style: normal;
     font-style: italic;
     font-style: oblique;
     ```

Here's an example that combines these properties to style a paragraph element:

```css
p {
  color: blue;
  font-size: 18px;
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-style: italic;
}
```

This CSS rule will make all `<p>` elements appear in blue color, have a font size of 18 pixels, use the Arial font (or sans-serif as a fallback), be displayed in bold, and be italicized.

Feel free to adjust these properties and values according to your desired text styling.

## Modifying backgrounds (color, image, repeat)

To modify backgrounds in CSS, you can use properties such as background-color, background-image, and background-repeat. Here's an explanation of each property:

### Background Color:
   - Property: `background-color`
   - Value: You can specify the background color using color names, hexadecimal values, RGB values, or HSL values. For example:
     ```css
     background-color: #f0f0f0;
     background-color: rgb(255, 0, 0);
     background-color: hsl(0, 100%, 50%);
     ```

### Background Image:
   - Property: `background-image`
   - Value: You can set a background image by specifying the URL of the image. For example:
     ```css
     background-image: url("image.jpg");
     ```

### Background Repeat:
   - Property: `background-repeat`
   - Value: Specifies how the background image is repeated. Common values are `repeat` (default, the image is repeated both horizontally and vertically), `repeat-x` (repeated horizontally only), `repeat-y` (repeated vertically only), and `no-repeat` (the image is not repeated). For example:
     ```css
     background-repeat: repeat;
     background-repeat: repeat-x;
     background-repeat: repeat-y;
     background-repeat: no-repeat;
     ```

Here's an example that combines these properties to style a container element:

```css
.container {
  background-color: #f0f0f0;
  background-image: url("background.jpg");
  background-repeat: repeat;
}
```

This CSS rule will set the background color to a light gray (`#f0f0f0`), set the background image to "background.jpg", and repeat the image both horizontally and vertically.

You can adjust the values of these properties and experiment with different combinations to achieve the desired background effect for your elements or web page. Additionally, other properties such as background-size and background-position can be used to further control the background's appearance and placement.


