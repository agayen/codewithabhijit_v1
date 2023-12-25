---
sidebar_position: 5
title: Matplotlib
description:
   data visualization, how to install Matplotlib, how to use Matplotlib to plot graphs i.e. 'Line plots','Scatter plot','Bar plot','histogram plot','Pie chart'
keywords:
    ['Matplotlib','install Matplotlib','data visualization','Introduction to data visualization','Seaborn','Plotly','ggplot','Bokeh','Plot using Matplotlib','Line plots','Scatter plot','Bar plot','histogram plot','Pie chart']
---
### Introduction to data visualization

Data visualization is the graphical representation of data to understand patterns, trends, and insights from data. It is a key step in the data analysis process and plays a crucial role in communicating complex data in a visual and understandable way.

Data visualization has several advantages, including:

-   **Enhanced understanding :** Data visualization helps in understanding complex data patterns and relationships that may not be apparent from raw data or numbers alone. It provides a visual representation that makes it easier to interpret data and draw meaningful conclusions.

-   **Quick insights :** Data visualization allows for quick and efficient analysis of large datasets, identifying trends, outliers, and patterns at a glance. This helps in gaining insights and making data-driven decisions in a more timely manner.

-   **Communication :** Data visualization serves as a powerful tool for communicating results and findings to various stakeholders, including team members, clients, or decision-makers. It helps in presenting data in a clear and concise manner, making it more accessible and understandable to a wider audience.

-   **Exploration :** Data visualization allows for interactive exploration of data, enabling users to drill down, filter, and manipulate data in real-time. This facilitates a deeper understanding of data and can lead to new discoveries or insights.

Some common types of data visualizations include bar charts, line charts, scatter plots, heatmaps, pie charts, and maps, among others. Python libraries such as Matplotlib, Seaborn, Plotly, and Bokeh are popular tools for creating visualizations. Effective data visualization involves choosing the right type of visualization for the data and the insights you want to convey, using appropriate colors, labels, and legends, and providing clear and meaningful visual representations of data.

**There are several popular libraries in Python for data visualization. Some of the top libraries for data visualization are :**

-   **Matplotlib :** `Matplotlib` is a widely used plotting library that provides a wide range of plotting functions, including line plots, scatter plots, bar plots, histograms, and more. It offers extensive customization options for creating publication-quality visualizations.

-   **Seaborn :** `Seaborn` is a statistical data visualization library based on `Matplotlib` that provides high-level interface for creating attractive and informative statistical graphics. It comes with built-in themes and color palettes, making it easy to create visually appealing visualizations.

-   **Plotly :** `Plotly` is an interactive plotting library that allows for creating interactive, web-based visualizations with a wide range of chart types, including scatter plots, bar plots, line plots, and more. It supports interactive features like zooming, panning, and hovering, making it suitable for creating interactive dashboards and reports.

-   **ggplot :** `ggplot` is a plotting library based on the Grammar of Graphics concept, providing a high-level interface for creating complex visualizations with concise and expressive code. It is designed to create visually appealing visualizations with minimal effort.

-   **Bokeh :** `Bokeh` is another interactive plotting library that allows for creating interactive visualizations in web browsers. It provides a flexible and powerful interface for creating a wide range of visualizations, including line plots, bar plots, scatter plots, and more.
 
These are some of the popular libraries for data visualization in Python. The choice of library depends on the specific requirements of your data visualization tasks, the type of visualizations you need to create, and your personal preferences in terms of coding style and customization options.

## Using Matplotlib  

**Here we will see only `Matplotlib`**
`Matplotlib` provides a wide range of plotting options for creating static, animated, and interactive visualizations. Here's a basic example of how to use Matplotlib to create a simple line plot :
### Install **Matplotlib**
You can install `Matplotlib` in Python using the `pip` package manager, which is the most common method for installing Python packages. Run the following command to install Matplotlib using `pip`:
```bash
pip3 install matplotlib
```
:::tip Noted
 To install **Matplotlib** in [Google Colab](https://colab.research.google.com/).
 Run the following commands:
```bash
!pip3 install matplotlib
```
:::


### Plot using **Matplotlib**
```python
import matplotlib.pyplot as plt

# Create some data
x = [1, 2, 3, 4, 5]
y = [2, 4, 6, 8, 10]

# Create a figure and axis
fig, ax = plt.subplots()

# Plot the data on the axis
ax.plot(x, y)

# Add labels and title
ax.set_xlabel('X Axis Label')
ax.set_ylabel('Y Axis Label')
ax.set_title('Line Plot Example')

# Display the plot
plt.show()
```
This will create a simple line plot with labeled axes and a title. Matplotlib provides a wide range of plotting functions for creating various types of plots such as line plots, scatter plots, bar plots, histograms, pie charts, and more. You can customize the appearance of your plots using various options like colors, markers, linestyles, and legends.

## Matplotlib Plots

### Line plots
```python
import matplotlib.pyplot as plt

x = [1, 2, 3, 4, 5]
y = [2, 4, 6, 8, 10]

plt.plot(x, y)
plt.xlabel('X Axis Label')
plt.ylabel('Y Axis Label')
plt.title('Line Plot Example')
plt.show()
```
### Scatter plot

```python
import matplotlib.pyplot as plt

x = [1, 2, 3, 4, 5]
y = [2, 4, 6, 8, 10]

plt.scatter(x, y)
plt.xlabel('X Axis Label')
plt.ylabel('Y Axis Label')
plt.title('Scatter Plot Example')
plt.show()
```
### Bar plot

```python
import matplotlib.pyplot as plt

x = ['A', 'B', 'C', 'D', 'E']
y = [3, 7, 2, 8, 5]

plt.bar(x, y)
plt.xlabel('X Axis Label')
plt.ylabel('Y Axis Label')
plt.title('Bar Plot Example')
plt.show()
```
### histogram plot
```python
import matplotlib.pyplot as plt

data = [1, 3, 3, 4, 5, 5, 6, 7, 8, 8, 9, 9, 9]

plt.hist(data, bins=5)
plt.xlabel('X Axis Label')
plt.ylabel('Y Axis Label')
plt.title('Histogram Example')
plt.show()
```
### Pie chart
```python
import matplotlib.pyplot as plt

labels = ['A', 'B', 'C', 'D', 'E']
sizes = [15, 30, 25, 10, 20]

plt.pie(sizes, labels=labels, autopct='%1.1f%%')
plt.title('Pie Chart Example')
plt.show()
```
These are just a few examples of the types of plots you can create using `Matplotlib`. `Matplotlib` provides many more types of plots, along with a wide range of customization options, making it a powerful tool for data visualization in Python.