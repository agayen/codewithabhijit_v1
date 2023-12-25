---
sidebar_position: 4
title: NumPy and Pandas
description:    how to install NumPy and Pandas, Numpy arrays and metrics, operations on Numpy arrays and metrics ,pandas series and dataframes, Operations on series and dataframes.
keywords:   [install pandas, install Numpy, install pandas in google colab, install Numpy in google colab, NumPy and Pandas, NumPy arrays , Numpy metrics, operations on arrays, operations on metrics, pandas series, pandas dataframes, operations on dataframes, operations on series]
---

## Introduction of NumPy and Pandas
NumPy and Pandas are two popular Python libraries used for data manipulation, analysis, and visualization.
-   To install **NumPy**. Open a command prompt or terminal window and Run the following command:
```bash
pip3 install numpy
```
-   To install **Pandas**. Open a command prompt or terminal window and Run the following command:
```bash
pip3 install pandas
```

:::tip Note
**Noted** To install **Numpy** and **Pandas** in [Google Colab](https://colab.research.google.com/).
Run the following commands:
```bash
!pip3 install numpy
!pip3 install pandas
```
:::
### NumPy
-   **NumPy** is a library for numerical computing in Python.
-   It provides a powerful array object that can hold and manipulate large amounts of data efficiently.
-   **NumPy** also provides many mathematical functions for array operations, including linear algebra, Fourier analysis, and random number generation.

-   Here's an example of how to use **NumPy** to perform some basic operations:

    ```python
    import numpy as np

    # Create a 2D NumPy array
    a = np.array([[1, 2], [3, 4]])

    # Print the array and its shape
    print(a)
    print(a.shape)

    # Output:
    # [[1 2]
    #  [3 4]]
    # (2, 2)

    # Compute the mean of each row and column
    print(np.mean(a, axis=0))
    print(np.mean(a, axis=1))

    # Output:
    # [2. 3.]
    # [1.5 3.5]
    ```

### Pandas

-   **Pandas** is a library for data manipulation and analysis in Python.
-   It provides two primary data structures: Series (1-dimensional) and DataFrame (2-dimensional).
-   **Pandas** allows you to read data from various sources, including CSV, Excel, SQL databases, and web APIs.
-   **Pandas** also provides many functions for data manipulation, including filtering, grouping, sorting, merging, and reshaping.
-   Here's an example of how to use Pandas to read a CSV file and perform some basic operations:

    ```python
    import pandas as pd

    # Read a CSV file into a Pandas DataFrame
    df = pd.read_csv("data.csv")

    # Print the first five rows of the DataFrame
    print(df.head())

    # Output:
    #    id       name  age  gender
    # 0    1       John   25    male
    # 1    2       Jane   30  female
    # 2    3  Alexander   22    male
    # 3    4       Anne   28  female
    # 4    5      Brian   35    male

    # Compute some basic statistics on the age column
    print(df["age"].describe())

    # Output:
    # count     5.000000
    # mean     28.000000
    # std       5.830952
    # min      22.000000
    # 25%      25.000000
    # 50%      28.000000
    # 75%      30.000000
    # max      35.000000
    ```

In this example, we read a CSV file into a Pandas DataFrame and printed the first five rows using the head method. We also computed some basic statistics on the age column using the describe method.

## Arrays and Matrices in NumPy

Arrays and matrices are fundamental data structures in NumPy, a powerful numerical computing library in Python. Here's a brief overview:

### Arrays
-   Arrays in `NumPy` are homogeneous, multi-dimensional collections of data of the same type.
-   They can have any number of dimensions, such as 1D, 2D, 3D, etc.
-   Arrays are commonly used for representing vectors, matrices, and multi-dimensional data.
-   `NumPy` provides a wide range of functions for creating, manipulating, and performing mathematical operations on arrays.

```python
import numpy as np

# Creating a 1D array
a = np.array([1, 2, 3, 4, 5])

# Creating a 2D array
b = np.array([[1, 2, 3], [4, 5, 6]])

# Accessing array elements
print(a[0])  # Output: 1
print(b[1, 2])  # Output: 6

# Performing operations on arrays
c = np.array([1, 2, 3])
d = np.array([4, 5, 6])
print(c + d)  # Output: [5, 7, 9]
print(c * d)  # Output: [4, 10, 18]
```

### Matrices
-   Matrices in `NumPy` are a specific type of 2D array with a defined number of rows and columns.
-   They are used for representing mathematical matrices and performing matrix operations, such as matrix multiplication,  determinant, inverse, etc.
-   `NumPy` provides functions for creating, manipulating, and performing various matrix operations.

```python
import numpy as np

# Creating a matrix
a = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

# Accessing matrix elements
print(a[0, 1])  # Output: 2

# Performing matrix operations
b = np.array([[9, 8, 7], [6, 5, 4], [3, 2, 1]])
print(np.dot(a, b))  # Output: [[30, 24, 18], [84, 69, 54], [138, 114, 90]]
```
Arrays and matrices in NumPy provide powerful capabilities for working with numerical data in Python, making it a popular choice for data science, machine learning, and scientific computing applications.
We will see operations of the matrix and arrays in more detials Mathematics Fundamental.

### Operations in **Matrices** and **Arrays**

-   **Array Creation :** `NumPy` provides various functions to create arrays, such as `np.array()`, `np.zeros()`, `np.ones()`, `np.arange()`, `np.linspace()`, etc. You can specify the shape, data type, and other properties while creating arrays.
    ```python
    import numpy as np

    # Creating an array with np.array()
    a = np.array([1, 2, 3, 4, 5])
    print(a)  # Output: [1 2 3 4 5]

    # Creating an array with np.zeros()
    b = np.zeros((3, 4))  # 3x4 array filled with zeros
    print(b)
    """
    Output:
    [[0. 0. 0. 0.]
    [0. 0. 0. 0.]
    [0. 0. 0. 0.]]
    """

    # Creating an array with np.ones()
    c = np.ones((2, 3), dtype=int)  # 2x3 array filled with ones of integer data type
    print(c)
    """
    Output:
    [[1 1 1]
    [1 1 1]]
    """

    # Creating an array with np.arange()
    d = np.arange(1, 10, 2)  # Array with values 1 to 9 with step of 2
    print(d)  # Output: [1 3 5 7 9]

    # Creating an array with np.linspace()
    e = np.linspace(0, 1, 5)  # Array with 5 equally spaced values between 0 and 1
    print(e)  # Output: [0.   0.25 0.5  0.75 1.  ]

    ```
-   **Array Indexing and Slicing :** You can access individual elements or slices of arrays using indexing and slicing in NumPy. Indexing starts from 0, and negative indices can be used to access elements from the end of the array.
    ```python
    import numpy as np

    # Array indexing
    a = np.array([1, 2, 3, 4, 5])
    print(a[0])  # Output: 1
    print(a[-1])  # Output: 5

    # Array slicing
    b = np.array([1, 2, 3, 4, 5])
    print(b[1:4])  # Output: [2 3 4]
    print(b[:3])  # Output: [1 2 3]
    print(b[2:])  # Output: [3 4 5]
    print(b[::2])  # Output: [1 3 5]

    ```
-   **Array Reshaping :** You can change the shape of arrays using the `reshape()` function in `NumPy`. The reshaped array has the same data but a different shape.
    ```python
    import numpy as np

    # Array reshaping
    a = np.array([1, 2, 3, 4, 5, 6])
    b = a.reshape((2, 3))  # Reshape to a 2x3 array
    print(b)
    """
    Output:
    [[1 2 3]
    [4 5 6]]
    """

    # Flattening an array
    c = b.flatten()  # Flatten the 2D array to a 1D array
    print(c)  # Output: [1 2 3 4 5 6]
    ```
-   **Array Operations :** `NumPy` provides a wide range of mathematical and element-wise operations for arrays, such as
    as arithmetic operations (`+`, `-`, `*`,`/`), element-wise functions (`sin`, `cos`, `exp`, `sqrt`, etc.), linear algebra operations (`dot product`, `matrix multiplication`, etc.), statistical operations (`mean`, `sum`,`min`, `max`, etc.), and many more.
    ```python
    import numpy as np

    # Array arithmetic operations
    a = np.array([1, 2, 3, 4, 5])
    b = np.array([5, 4, 3, 2, 1])
    c = a + b  # Element-wise addition
    d = a * b  # Element-wise multiplication
    e = a / b  # Element-wise division
    print(c)  # Output: [6 6 6 6 6]
    print(d)  # Output: [5 8 9 8 5]
    print(e)  # Output: [0.2 0.5 1.  2.  5. ]

    # Element-wise functions
    f = np.sin(a)  # Element-wise sine function
    g = np.exp(b)  # Element-wise exponential function
    h = np.sqrt(a)  # Element-wise square root function
    print(f)  # Output: [0.84147098 0.90929743 0.14112001 -0.7568025 -0.95892427]
    print(g)  # Output: [148.4131591  54.59815003 20.08553692  7.3890561   2.71828183]
    print(h)  # Output: [1.         1.41421356 1.73205081 2.         2.23606798]

    # Linear algebra operations
    i = np.dot(a, b)  # Dot product of two arrays
    j = np.matmul(a, b)  # Matrix multiplication of two arrays
    print(i)  # Output: 35
    print(j)  # Output: 35

    # Statistical operations
    k = np.mean(a)  # Mean of array a
    l = np.sum(b)  # Sum of array b
    m = np.min(a)  # Minimum value of array a
    n = np.max(b)  # Maximum value of array b
    print(k)  # Output: 3.0
    print(l)  # Output: 15
    print(m)  # Output: 1
    print(n)  # Output: 5
    ```
-   **Matrix operations** are an important aspect of numerical computing and data analysis.`NumPy`, a popular Python library for numerical computing, provides various functions and methods for performing matrix operations efficiently. Here are some examples of matrix operations in `NumPy`:
    ```python
    import numpy as np

    # Matrix creation
    A = np.array([[1, 2], [3, 4]])  # 2x2 matrix
    B = np.array([[5, 6], [7, 8]])  # 2x2 matrix

    # Matrix addition
    C = A + B
    print(C)  # Output: [[ 6  8]
    #                   [10 12]]

    # Matrix subtraction
    D = A - B
    print(D)  # Output: [[-4 -4]
    #                   [-4 -4]]

    # Matrix multiplication
    E = np.dot(A, B)
    F = A.dot(B)  # Equivalent to np.dot(A, B)
    print(E)  # Output: [[19 22]
    #                   [43 50]]
    print(F)  # Output: [[19 22]
    #                   [43 50]]

    # Element-wise matrix multiplication
    G = A * B
    print(G)  # Output: [[ 5 12]
    #                   [21 32]]

    # Matrix transpose
    H = A.T
    print(H)  # Output: [[1 3]
    #                   [2 4]]

    # Matrix inverse
    I = np.linalg.inv(A)
    print(I)  # Output: [[-2.   1. ]
    #                   [ 1.5 -0.5]]

    # Matrix determinant
    det_A = np.linalg.det(A)
    print(det_A)  # Output: -2.0

    # Matrix rank
    rank_A = np.linalg.matrix_rank(A)
    print(rank_A)  # Output: 2

    # Eigenvalues and eigenvectors
    eigenvalues, eigenvectors = np.linalg.eig(A)
    print(eigenvalues)  # Output: [-0.37228021+0.j  5.37228021+0.j]
    print(eigenvectors)  
    # Output: [[-0.82456484 -0.41597356]
    #         [ 0.56576746 -0.90937671]]
    ```

## DataFrames and Series in Pandas
DataFrames and Series are two main data structures provided by the Pandas library in Python for data manipulation and analysis. Here's a brief overview :
### Series
-   A Series is a one-dimensional labeled array that can hold various data types such as `integers`, `floats`, `strings`, etc. It is similar to a `NumPy` array, but with labels or indices associated with each element. Series are created using the `pd.Series()` function in `Pandas`. Example:
    ```python
    import pandas as pd

    # Create a Series
    s = pd.Series([1, 2, 3, 4, 5])
    print(s)

    # Output:
    # 0    1
    # 1    2
    # 2    3
    # 3    4
    # 4    5
    # dtype: int64
    ```
### DataFrame
-   A DataFrame is a two-dimensional tabular data structure with labeled axes (rows and columns). It can be thought of as a collection of Series objects, where each Series represents a column of data. DataFrames are useful for storing and manipulating data that can be thought of as spreadsheet-like or SQL table-like.
    ```python
    import pandas as pd

    # Create a dictionary of data
    data = {'name': ['Alice', 'Bob', 'Charlie', 'David'],
            'age': [25, 32, 18, 47],
            'gender': ['F', 'M', 'M', 'M']}

    # Create a DataFrame from the dictionary
    df = pd.DataFrame(data)

    # Display the DataFrame
    print(df)

    # Output:
    #        name  age gender
    # 0     Alice   25      F
    # 1       Bob   32      M
    # 2   Charlie   18      M
    # 3     David   47      M

    # Accessing columns in a DataFrame
    print(df['name'])    # Access the 'name' column
    print(df.name)       # Another way to access the 'name' column

    # Output:
    # 0       Alice
    # 1         Bob
    # 2     Charlie
    # 3       David
    # Name: name, dtype: object

    # Accessing rows in a DataFrame
    print(df.iloc[0])     # Access the first row by index (integer location)
    print(df.loc[0])      # Access the first row by label (index label)

    # Output:
    # name      Alice
    # age           25
    # gender         F
    # Name: 0, dtype: object

    # Adding a new column to a DataFrame
    df['city'] = ['New York', 'Los Angeles', 'Chicago', 'Houston']
    print(df)

    # Output:
    #        name  age gender          city
    # 0     Alice   25      F       New York
    # 1       Bob   32      M    Los Angeles
    # 2   Charlie   18      M         Chicago
    # 3     David   47      M         Houston

    # Filtering rows in a DataFrame based on a condition
    filtered_df = df[df['age'] > 30]
    print(filtered_df)

    # Output:
    #    name  age gender          city
    # 1   Bob   32      M    Los Angeles
    # 3 David   47      M         Houston

    # Grouping data in a DataFrame by a column
    grouped_df = df.groupby('gender').mean()
    print(grouped_df)

    # Output:
    #          age
    # gender      
    # F        25.0
    # M        32.333333
    ```