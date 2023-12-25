---
sidebar_position: 5
title: Working with Files and Data
description:    
    Working with Files and Data
keywords:
    ['hello']
---

## Reading and Writing data in Python

Reading and writing data in Python involves working with various file formats such as text files, CSV files, Excel files, and more. Here are some examples of how to read and write data in Python:

### Reading data from a text file
```python
# Open a text file for reading
file = open("file.txt", "r")

# Read the entire contents of the file
content = file.read()

# Close the file
file.close()

# Print the content
print(content)
```
### Writing data to a text file
```python
# Open a text file for writing
file = open("file.txt", "w")

# Write data to the file
file.write("Hello, world!")

# Close the file
file.close()
```
### Reading data from a CSV file using Pandas
```python
import pandas as pd

# Read CSV file into a DataFrame
df = pd.read_csv("data.csv")

# Print the first 5 rows of the DataFrame
print(df.head())
```
### Writing data to a CSV file using Pandas
```python
import pandas as pd

# Create a DataFrame
df = pd.DataFrame({"Name": ["John", "Alice", "Bob"], "Age": [25, 28, 32]})

# Write DataFrame to a CSV file
df.to_csv("output.csv", index=False)
```
### Reading and writing data from/to Excel files using Pandas
```python
import pandas as pd

# Read Excel file into a DataFrame
df = pd.read_excel("data.xlsx")

# Print the first 5 rows of the DataFrame
print(df.head())

# Write DataFrame to an Excel file
df.to_excel("output.xlsx", index=False)
```