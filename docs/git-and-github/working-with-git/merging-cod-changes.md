---
sidebar_position: 3
title: Branching and merging code changes
description: How to  merging code in Git.
keywords:   ['Branching and merging code changes','Branching', 'Branching and merging','How to marge code','git commit']
---


# Branching and merging code changes

Branching and merging are powerful features of Git that allow developers to work on different parts of the codebase independently and then combine their changes when they are ready. Here are the basic steps for branching and merging code changes in Git:

## Create a new branch
Use the `git branch` command to create a new branch. For example, to create a new branch called "new-feature", run the following command:

```bash
git branch new-feature
```

This command creates a new branch that is identical to the current branch you are on.

## Switch to the new branch 
Use the `git checkout` command to switch to the new branch. For example, to switch to the "new-feature" branch you just created, run the following command:

```bash
git checkout new-feature
```

This command switches your working directory to the new branch.

## Make changes to the code
Open the file you want to modify and make the desired changes. Save the file when you're done.

## Stage and commit the changes
Use the `git add` and `git commit` commands to stage and commit the changes you made to the file. For example:

```bash
git add example.py
git commit -m "Added new feature to new-feature branch"
```

This command stages the changes you made to the file and creates a new commit with a message that describes the changes.

## Switch back to the main branch
Use the `git checkout` command to switch back to the main branch. For example:

```bash
git checkout main
```

This command switches your working directory back to the main branch.

## Merge the new feature branch into the main branch
Use the `git merge` command to merge the changes from the new-feature branch into the main branch. For example:

```bash
git merge new-feature
```

This command merges the changes from the new-feature branch into the main branch. If there are any conflicts, Git will prompt you to resolve them.

## Delete the new feature branch
Once the changes have been merged, you can delete the new feature branch. For example:

```bash
git branch -d new-feature
```

This command deletes the new feature branch from your local repository.

By following these steps, you can use Git to branch and merge code changes. Branching and merging are powerful tools that allow developers to work on different parts of the codebase independently and then combine their changes when they are ready. This helps to reduce conflicts and errors, and makes it easier to manage the development process.