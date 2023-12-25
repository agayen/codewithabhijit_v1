---
sidebar_position: 3
title: Basic Python
description:
    how to install python3, pip , Set up a Virtual Environment, Activate the Virtual Environment, install libary for 
    deep learning
---

## Data Types , Variables and Operators

### Data Types and Variables

-   **Numeric Data Types :**
    -   **int :** Represents integer values, e.g., `42`, `-5`, `0`.
    -   **float :** Represents floating-point numbers with decimal values, e.g., `3.14`, `-0.5`.

-   **String Data Type :**
    -   **str :** Represents sequences of characters, e.g., `"hello"`, `'world'`, `"123"`.

-   **Boolean Data Type :**
    -   **bool :** Represents either True or False, e.g., `True`, `False`.

-   **List Data Type :**
    -   **list :** Represents ordered collections of items, which can be of different data types, e.g., `[1, 2, 3]`, `['a', 'b', 'c']`, `[1.2, 'hello', True]`.

-   **Tuple Data Type :**
    -   **tuple :** Represents immutable (unchangeable) ordered collections of items, e.g., `(1, 2, 3)`, `('a', 'b', 'c')`.

-   **Dictionary Data Type :**
    -   **dict :** Represents key-value pairs, where keys are unique and immutable, e.g., `{'name': 'John', 'age': 30}`, `{'color': 'blue', 'size': 'small'}`.

### Variables in Python:

-   A variable is a named location in the computer's memory that can store a value of a particular data type.
-   Variables are created by assigning a value to a name using the assignment operator (`=`).
    -   Example: `x = 10` creates a variable named x and assigns it the value of 10.

### Operations in Python:
-   **Arithmetic Operations :**
    -   Addition (`+`)
    -   Subtraction (`-`)
    -   Multiplication (`*`)
    -   Division (`/`)
    -   Modulus (`%`)
    -   Exponentiation (`**`).
-   **Assignment Operations :**
    -   Assign (`=`)
    -   Add and assign (`+=`)
    -   Subtract and assign (`-=`)
    -   Multiply and assign (`*=`)
    -   Divide and assign (`/=`)
    -   Modulus and assign (`%=`)
    -   Exponentiation and assign (`**=`).
-   **Comparison Operations :** 
    -   Equal to (`==`)
    -   Not equal to (`!=`) 
    -   Greater than (`>`)
    -   Less than (`<`)
    -   Greater than or equal to (`>=`)
    -   Less than or equal to (`<=`)
-   **Logical Operations :** 
    -   AND (`and`)
    -   OR (`or`)
    -   NOT (`not`)
-   **Other Operations :**
    -   Type conversion (`int()`, `float()`, `str()`, `bool()`)
    -   Membership test (`in`)
    -   Identity test (`is`)

Here's an example of using data types, variables, and operations in Python:
```python
# Numeric Data Types and Variables
x = 42           # int
y = 3.14         # float
result = x + y   # Addition

# String Data Type and Variables
name = "Abhijit"    # str
age = 30         # int
greeting = "Hello, " + name   # String concatenation

# Boolean Data Type and Variables
is_active = True   # bool
is_adult = age >= 18   # Comparison

# List Data Type and Variables
numbers = [1, 2, 3, 4, 5]   # list
fruits = ['apple', 'banana', 'cherry']
numbers[2] = 7   # List item modification

# Tuple Data Type and Variables
coordinates = (10, 20)   # tuple
x, y = coordinates      # Tuple unpacking

# Dictionary Data Type and Variables
person = {'name': 'Alice', 'age': 25}   # dict
print(person['name'])   # Accessing dictionary value

# Arithmetic Operations
a = 5
b = 3
sum = a + b        # Addition
difference = a - b   # Subtraction
product = a * b      # Multiplication
quotient = a / b

#use in
'apple' in fruit #True
'Abhijit' in fruit #False

#use is
data = None
data is None #True

#use Not
Not(True) #False
Not(None) #True
Not('') #True
```

## Classes and Objects

-   **Define the Class :** Define a class using the class keyword, followed by the class name, and a pair of parentheses. Inside the class, you can define attributes (data members) and methods (functions).
-   **Create Objects :** Create objects (also known as instances) of the class by calling the class name followed by parentheses, just like calling a function. This creates a new object with its own memory space.
-   **Initialize Objects :** If the class has a constructor method (`__init__`), it will be automatically called when an object is created. You can define the constructor method inside the class to initialize the attributes of the object.
-   **Access Attributes and Call Methods :** You can access the attributes (data members) and call the methods (functions) of the object using the dot (`.`) operator followed by the attribute or method name.
-   **Modify Attributes :** You can modify the attributes of an object by directly assigning a new value to them using the dot (`.`) operator.

Here's an example of how to define and use a simple class in Python:

```python
# Define a class
class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def bark(self):
        print("Woof!")

# Create objects
dog1 = Dog("Buddy", 3)
dog2 = Dog("Max", 5)

# Access attributes
print(dog1.name)  # Output: Buddy
print(dog2.age)    # Output: 5

# Call methods
dog1.bark()       # Output: Woof!
dog2.bark()       # Output: Woof!

# Modify attributes
dog1.age = 4
print(dog1.age)    # Output: 4
```

##  Functions in python
-   A function is a block of code that performs a specific task and can be reused throughout your program.
-   Functions can take input arguments and return output values.
-   To define a function in Python, use the `def` keyword followed by the function name, parameter list (if any), and a colon (`:`). The function body should be indented after the colon.
Here's an example of defining and calling a simple function in Python:

```python
# Define a function that takes two numbers as arguments and returns their sum
def add_numbers(x, y):
    result = x + y
    return result

# Call the function and print the result
print(add_numbers(3, 5))   # Output: 8
```
-   In this example, we defined a function named `add_numbers` that takes two arguments (`x` and `y`) and returns their sum.
-   We then called the function and passed in the values 3 and 5 as arguments, which resulted in a return value of 8.
-   We then printed the result using the `print` function.

**Functions can also have default parameter values, allowing you to call the function without passing in all arguments :**

```python
# Define a function that takes two numbers as arguments and returns their sum
# with a default value of 0 for y
def add_numbers(x, y=0):
    result = x + y
    return result

# Call the function with one argument and the default value for y
print(add_numbers(3))   # Output: 3

# Call the function with two arguments
print(add_numbers(3, 5))   # Output: 8
```
-   In this example, we defined a function named `add_numbers` that takes two arguments (`x` and `y`) with a default value of 0 for y.
-   We then called the function with only one argument, which resulted in a return value of 3 (since `y` defaulted to 0).
-   We then called the function with two arguments, which resulted in a return value of 8 (since `y` was set to 5).

**Functions can also return multiple values using tuples :**

```python
# Define a function that takes two numbers as arguments and returns their sum and product
def add_and_multiply_numbers(x, y):
    sum = x + y
    product = x * y
    return sum, product

# Call the function and unpack the return values into two variables
result_sum, result_product = add_and_multiply_numbers(3, 5)
print(result_sum)      # Output: 8
print(result_product)  # Output: 15
```
-   In this example, we defined a function named `add_and_multiply_numbers` that takes two arguments (`x` and `y`) and returns    
-  their sum and product as a tuple.
-   We then called the function and unpacked the resulting tuple into two separate variables (`result_sum` and `result_product`).
-   We then printed the two variables using the `print` function.

## Control structures in Python

### Conditional statements
-   Conditional statements are used to perform different actions based on different conditions.
-   The basic syntax of an if/else statement in Python is:
```python
if condition:
    # code to be executed if the condition is True
else:
    # code to be executed if the condition is False
```
Here's an example:
```python
# Define a function that takes an integer as input and returns a message based on its value
def check_number(n):
    if n > 0:
        return "Positive"
    elif n == 0:
        return "Zero"
    else:
        return "Negative"

# Call the function and print the result
print(check_number(5))   # Output: Positive
print(check_number(0))   # Output: Zero
print(check_number(-5))  # Output: Negative
```
-   In this example, we defined a function named `check_number` that takes an integer as input and returns a message based on whether it is positive, zero, or negative.
-   We then called the function with three different values and printed the result using the `print` function.
### Loops
-   Loops are used to repeat a block of code multiple times.
-   Python provides two types of loops: `for` loops and `while` loops.
-   **`for` loops :**
    -   `for` loops are used to iterate over a sequence of elements (such as a list, tuple, or string) or a range of numbers.
    -   The basic syntax of a `for` loop in Python is:
        ```python
        # Define a list of names and print each name
        names = ["Alice", "Bob", "Charlie", "Dave"]
        for name in names:
            print(name)

        # Output:
        # Alice
        # Bob
        # Charlie
        # Dave
        ```
- `while` loops:
    -   `while` loops are used to repeat a block of code as long as a certain condition is True.
    -   The basic syntax of a while loop in Python is:
    ```python
    # Define a variable and print its value until it is greater than 10
    n = 1
    while n <= 10:
        print(n)
        n += 1

    # Output:
    # 1
    # 2
    # 3
    # 4
    # 5
    # 6
    # 7
    # 8
    # 9
    # 10
    ```
-   Loop control statements:
    -   Python provides two special statements that allow you to control the flow of a loop: `break` and continue.
    -   `break` is used to exit a loop prematurely, while continue is used to skip to the next iteration of a loop.
    -   Here's an example:
        ```python
        # Define a list of numbers and print each one until a negative number is encountered
        numbers = [1, 2, 3, -4, 5, 6, 7, -8, 9]
        for number in numbers:
            if number < 0:
                break   # exit the loop if a negative number is encountered
            print(number)

        # Output:
        #1
        #2
        #3
        ```