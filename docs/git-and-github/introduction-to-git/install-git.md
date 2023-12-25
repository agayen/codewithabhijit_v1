---
sidebar_position: 2
title: Install Git and configure
description: Install Git and configure it for use on their local machine
keywords:   ['Install Git and configure it for use on their local machine', 'GitHub','Install Git','Version Control']
---




# Install Git and configure

Installing Git on your local machine is a straightforward process that varies slightly depending on your operating system. Here are some general steps to install Git and configure it for use:

## Download Git
Go to the official Git website https://git-scm.com/downloads and download the appropriate installer for your operating system. You can choose between a command-line version or a graphical user interface (GUI) version.

## Install Git
Run the downloaded installer and follow the instructions. The installer will guide you through the process of installing Git on your local machine. On Windows, you may need to select the option to add Git to your system path during installation.

## Configure Git
Once Git is installed, you need to configure it with your name and email address. Open a command prompt or terminal window and enter the following commands, replacing "Your Name" and "your@email.com" with your actual name and email address:

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

These commands set up your Git profile, which is used to identify you as the author of any changes you make to the code.

## Verify Git installation
To verify that Git is installed and configured correctly, open a command prompt or terminal window and enter the following command:

```bash
git --version
```

This command should display the version of Git that is installed on your system. If you see an error message, double-check that Git is installed correctly and that it is added to your system path.

Once Git is installed and configured, you can start using it to manage your code repositories. You can create a new Git repository, clone an existing repository, make changes to your code, and collaborate with other developers using Git.