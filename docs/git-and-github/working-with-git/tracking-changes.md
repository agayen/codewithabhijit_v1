---
sidebar_position: 1
title: Tracking changes in code
description: Tracking all changes in code using Git
keywords:   ['Tracking changes in code using Git','Git', 'git init','git add','git commit','Tracking changes']
---


# Tracking changes in code

Git is a powerful version control system that allows you to track changes in your code over time. Here are the basic steps to track changes in your code using Git:

## Make changes to your code
Open the file you want to modify and make the desired changes. Save the file when you're done.

## Stage the changes
Use the `git add` command to stage the changes you made to the file. For example, to stage a file called `example.py`, run the following command:

```bash
git add example.py
```

This command tells Git to track changes to the file and include it in the next commit.

## Commit the changes
Use the `git commit` command to commit the changes to your local repository. For example, to commit the changes you staged in step 2, run the following command:

```bash
git commit -m "Added new feature"
```

This command creates a new commit with a message that describes the changes you made. The commit is saved to your local repository and includes a snapshot of the current state of your code.

## Repeat the process 
Make additional changes to your code and repeat steps 2 and 3 to track those changes.

## Push changes to a remote repository 
If you are collaborating with others, you can use the `git push` command to push your changes to a remote repository. For example, to push your changes to a remote repository called "origin" in the "master" branch, run the following command:

```bash
git push origin master
```

This command sends your changes to the remote repository and updates the "master" branch with the latest changes.

By following these steps, you can use Git to track changes in your code and collaborate with other developers. Git allows you to easily revert to previous versions of your code, compare different versions, and resolve conflicts when multiple developers are making changes to the same code.