---
sidebar_position: 2
title: Installing libraries
description:
    how to install python3, pip , Set up a Virtual Environment, Activate the Virtual Environment, install libary for 
    deep learning
keywords: ['install python3','install pip','python3','pip','virtualenv','activate virtualenv','deactivate virtualenv','deep learning']
---

Setting up **Python3** for deep learning involves several steps, including installing **Python3**, setting up a virtual environment, installing deep learning libraries, and configuring your development environment. Here's a step-by-step guide:

## Step 1: Install Python 3
- Download and install Python 3 from the official Python website [https://www.python.org/downloads/](https://www.python.org/downloads/) . Follow the installation instructions for your operating system (Windows, macOS, or Linux).

**Or** 

You can install Python 3 using the command line, follow these steps:
-   Open a command prompt or terminal window on your computer.
-   Navigate to the directory where you want to install Python 3 (if necessary).
-   Enter the appropriate command for your operating system:
    -   **For Windows :**
    ```bash
    choco install python
    ```
    -   **For macOS :**
    ```bash
    brew install python
    ```
    -   **For Ubuntu/Linux :**
    ```bash
    sudo apt-get update
    sudo apt-get install python3
    ```
-   Follow the prompts to complete the installation process.
-   Verify the installation by running python3 command in the command prompt or terminal to start the Python 3 interpreter.
    ```bash
    python3 --version
    ```

## Setp 2: Install pip
**Pip** is a package manager for Python that allows you to easily install and manage Python packages. Here's how you can install pip on different operating systems:

**For Windows :**
-   Download the get-pip.py script from https://bootstrap.pypa.io/get-pip.py.
-   Open a command prompt with administrative privileges.
-   Navigate to the directory where you downloaded the get-pip.py script.
-   Run the following command to install pip:
  ```bash
  python get-pip.py
  ```

**For macOS and Linux :**
-   Open a terminal window.
-   Run the following command to download the pip installer script :
    ```bash
    curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
    ```
-   Run the following command to install pip :
  ```bash
  python3 get-pip.py
  ```
Once the installation is complete, you can use pip to install Python packages by running `pip install <package_name>` in the command prompt or terminal. Pip will automatically handle dependencies and install the requested packages.

:::tip Note

**Note :** If you're using **Python 3**, you should use `pip3` instead of `pip` in the commands above to ensure that you're installing packages for Python 3 specifically.

:::
## Step 3: Set up a Virtual Environment
-   It is recommended to set up a virtual environment to isolate your deep learning project dependencies from your system-wide Python installation. You can use virtualenv or conda to create a virtual environment.
- Need to install libary **virtualenv** . Run the following command
  ```bash
    pip install virtualenv
  ```
- To create a virtual environment using virtualenv, open a command prompt or terminal and run the following command
  ```bash
    python3 -m venv myenv
  ```
where **myenv** is the name of your virtual environment. You can replace python3 with python if you are using Windows.

## Step 4: Activate the Virtual Environment
- Activate the virtual environment using the appropriate command for your operating system:
    - For Windows:
    ```bash
    myenv\Scripts\activate
    ```
    - For macOS and Linux:
    ```bash
    source myenv/bin/activate
    ```
    - You can deactivate using
    ```bash
    deactivate
    ```
## Step 4: Install Deep Learning Libraries

- Install the required deep learning libraries using pip, the Python package manager, while your virtual environment is active. Some popular deep learning libraries include TensorFlow, Keras, PyTorch, and scikit-learn.
    ```bash
    pip install tensorflow keras pytorch scikit-learn
    ```
## Step 5: Configure Your Development Environment
- Depending on your deep learning workflow, you may also need to configure other tools such as an Integrated Development Environment (IDE), code editor, and other libraries or dependencies specific to your project.
