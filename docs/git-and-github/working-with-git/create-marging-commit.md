---
sidebar_position: 2
title: Creating and managing commits
description: Creating and managing commits in Git
keywords:   ['Creating and managing commits','managing commits', 'Creating commit','git add','git commit','Tracking changes']
---


Creating and managing commits is an essential part of working with Git. Commits are snapshots of your code at a specific point in time, and they allow you to track changes to your code over time. Here are the basic steps to create and manage commits in Git:

## Stage your changes
Before you can create a commit, you need to stage the changes you want to include in the commit. Use the `git add` command to stage files or changes. For example, to stage all changes in the current directory and its subdirectories, run the following command:

```bash
git add .
```

## Create a commit
Once you have staged your changes, you can create a commit using the `git commit` command. Use the `-m` flag to add a commit message that describes the changes you made. For example, to create a commit with the message "Added new feature", run the following command:

```bash
git commit -m "Added new feature"
```

## View commit history
You can use the `git log` command to view the commit history of a repository. This command displays a list of all commits, with the most recent commit appearing at the top of the list. For example, to view the commit history, run the following command:

```bash
git log
```

## Edit or delete commits
Use the `git commit --amend` command to edit the last commit message or make changes to the last commit. For example, to change the message of the last commit, run the following command:

```
git commit --amend -m "New message"
```

## Revert a commit
If you need to revert a commit, use the `git revert` command. This command creates a new commit that undoes the changes made by a previous commit. For example, to revert the most recent commit, run the following command:

```bash
git revert HEAD
```

## Cherry-pick a commit
If you want to apply a specific commit to another branch, use the `git cherry-pick` command. This command allows you to copy a commit from one branch to another. For example, to apply a commit with the ID `abc123` to the current branch, run the following command:

```bash
git cherry-pick abc123
```

By following these steps, you can create and manage commits in Git. Commits are a powerful tool for tracking changes to your code over time, and they allow you to collaborate with other developers more effectively. 