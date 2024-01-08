---
sidebar_position: 1
---

# Introduction to Python

## What is **Python** and why use it for **Deep learning**?

Python was first created by Guido van Rossum and released in 1991 as a successor to the ABC language. Van Rossum named it after the British comedy group Monty Python, a name that has since become synonymous with the language.

Python quickly gained popularity among developers for its simplicity, ease of use, and readability. It has since become one of the most widely used programming languages in the world, and is particularly popular in the fields of data science, machine learning, and artificial intelligence.

Over the years, Python has undergone several major releases, with each version introducing new features and improvements to the language. Some of the most notable releases include:

:::tip Python 2.0

Released in 2000, Python 2.0 introduced list comprehensions, a more advanced garbage collector, and support for Unicode.

:::

:::tip Python 3.0

Released in 2008, Python 3.0 was a major overhaul of the language, with many changes that were not backwards-compatible with earlier versions of Python. Among the changes were improved Unicode support, a streamlined syntax, and a reworked standard library.

:::

:::tip Python 3.5

Released in 2015, Python 3.5 introduced asynchronous programming support with the "async" and "await" keywords, as well as type hints for function annotations.

:::

:::tip Python 3.5

Released in 2019, Python 3.8 introduced several new features, including the "walrus operator" (:=), improved f-strings, and the ability to use underscores as separators in numeric literals.

:::

Today, Python is a popular programming language for deep learning due to its simplicity, flexibility, and powerful libraries such as NumPy, Pandas, and Matplotlib. In this introduction to Python for deep learning, we will cover the basics of Python programming that are essential for understanding and building deep learning models.

Python is a popular choice for deep learning for several reasons:

- **Easy to Learn and Use :** Python has a simple and readable syntax that makes it easy to learn and understand, even for beginners. It has a large community of developers who contribute to its development and create a wealth of resources, tutorials, and documentation, making it accessible and well-supported.

- **Large Ecosystem of Libraries :** Python has a rich ecosystem of libraries that are widely used in the field of deep learning, such as TensorFlow, Keras, PyTorch, and scikit-learn, among others. These libraries provide high-level APIs and pre-implemented functions for building and training deep neural networks, which can save time and effort in coding.

- **Flexibility and Extensibility :** Python is a dynamically-typed language that allows for quick experimentation and prototyping, making it suitable for the iterative process of deep learning model development. It also supports object-oriented programming (OOP) and functional programming paradigms, providing flexibility in coding styles and allowing for easy integration with other tools and libraries.

- **Large Developer Community :** Python has a large and active developer community that contributes to its development and creates a vast ecosystem of third-party libraries and tools. This community-driven approach results in continuous improvements, updates, and support for Python in the field of deep learning.

- **Interoperability :** Python can easily interface with other programming languages and tools, making it suitable for integrating deep learning models into existing workflows or systems. Python provides APIs and libraries for data manipulation, visualization, and analysis, which can be used in conjunction with deep learning libraries for a complete data science workflow.

- **Scalability and Performance :** Python has robust support for multi-threading, multi-processing, and distributed computing, making it scalable and capable of handling large datasets and complex deep learning models. Additionally, Python libraries like TensorFlow and PyTorch provide optimized implementations for running deep learning models on GPUs, which can significantly accelerate the training and inference processes.

- **Industry Adoption :** Python is widely adopted in the industry for various machine learning and deep learning applications. Many technology giants and research organizations, such as Google, Facebook, Microsoft, OpenAI, and NVIDIA, use Python for deep learning research and development.

In summary, Python is a popular and widely-used programming language for deep learning due to its ease of use, extensive ecosystem of libraries, flexibility, scalability, and strong developer community support. Its simplicity and versatility make it a preferred choice for deep learning practitioners to develop, train, and deploy deep neural networks for a wide range of applications.

## **[Colab notebooks](https://colab.research.google.com/)** SetUp

Create a new notebook `intro-python-1.ipynb`:

```python title="intro-python-1.ipynb"
print('hello world!')
#hello world!
```

Check Python Version in Colab notebook. we will use python3 and `version >= 3.9.16`

```bash title="intro-python-1.ipynb"
!python3 --version
```

:::tip Note
All linux commands will work here . You need to use `!` before the command is executed. i.e `!ls`
:::

**Colab notebook system details**

```bash title="intro-python-1.ipynb"
!cat /proc/cpuinfo
```

```bash title="intro-python-1.ipynb"
!df -h
```
