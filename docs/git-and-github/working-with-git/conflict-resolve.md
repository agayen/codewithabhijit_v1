---
sidebar_position: 2
title: Resolving conflicts in code
description: Resolving conflicts in code in Git
keywords:   ['Resolving conflicts','Resolving conflicts in code in Git']
---

# Resolving conflicts in code

When multiple people are working on the same codebase and making changes to the same files, conflicts can arise when trying to merge those changes. Git provides tools to help you resolve these conflicts. Here are the basic steps for resolving conflicts in Git:

## Identify the conflict
When you try to merge changes that conflict, Git will inform you of the conflict. You can use the `git status` command to see which files have conflicts.

## Open the conflicting file
Open the file in question in a text editor. Git will have marked the conflicting sections of the code with special markers. These markers are `<<<<<<<`, `=======`, and `>>>>>>>`.

## Resolve the conflict
Edit the file to resolve the conflict. Delete the markers and make any necessary changes to the code. Save the file when you're done.

## Stage the changes
Once you've resolved the conflict, use the `git add` command to stage the changes. For example:

```bash
git add example.py
```

## Commit the changes
Use the `git commit` command to commit the changes with a message that describes the resolution of the conflict. For example:

```bash
git commit -m "Resolved conflict in example.py"
```

## Complete the merge
Use the `git merge` command to complete the merge. If there are any remaining conflicts, Git will prompt you to resolve them.

## Push the changes
Once the merge is complete, use the `git push` command to push the changes to the remote repository. For example:

```bash
git push origin main
```

By following these steps, you can use Git to resolve conflicts in code. Conflict resolution is an important skill for software developers who work in teams, and Git provides tools to help make the process easier.