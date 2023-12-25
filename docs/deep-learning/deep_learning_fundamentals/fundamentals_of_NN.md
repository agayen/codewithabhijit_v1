---
sidebar_position: 1
title: Fundamentals of Neural Networks
description: Fundamentals of Neural Networks
keywords: ['Fundamentals of Neural Networks']
---

## Artificial neurons
Artificial neurons, also known as artificial neurons or artificial nodes, are fundamental units of computation in artificial neural networks, which are the foundation of deep learning and machine learning. They are inspired by the structure and function of biological neurons in the human brain, but they are simplified mathematical models designed for efficient computation on computers.

### What is artificial neurons ?

Artificial neurons receive inputs, perform a computation, and produce an output, which is typically used as the input for other neurons in the network. Each artificial neuron has associated parameters, such as weights and biases, which are learned during the training process to optimize the neuron's ability to make accurate predictions or perform other tasks, such as pattern recognition, classification, regression, and more.

Artificial neurons are the building blocks of artificial neural networks, which can be organized into layers to form deep neural networks (DNNs) with multiple hidden layers. DNNs are capable of learning hierarchical representations of data and have shown remarkable performance in various machine learning tasks, including image recognition, speech recognition, natural language processing, and many other areas of AI research and applications.

MP neuron, perceptron, and sigmoid neuron are different types of artificial neurons used in artificial neural networks. Here are some details about each of them:

### MP Neuron
MP (McCulloch-Pitts) neuron is a simple binary threshold neuron model, proposed by Warren McCulloch and Walter Pitts in 1943. It takes multiple binary inputs, performs a weighted sum of the inputs, and compares the sum with a threshold value. If the sum is greater than the threshold, the neuron outputs 1, otherwise it outputs 0. The MP neuron model can be mathematically defined as follows:

```Latex
Output = 1, if Σxi + b ≥ θ
Output = 0, otherwise
```
where xi are the input values and b is the threshold.

:::tip Remark

For this MP neuron, we will find the value of the threshold b .We can get this value by using bootforce.

::: 

```python
import numpy as np

class MPNeuron:
    def __init__(self, threshold):
        self.threshold = threshold

    def activate(self, x):
        """
        Activates the MP neuron with input data x.

        Arguments:
        x -- input data (binary array or scalar)

        Returns:
        1 -- if the sum of input data is greater than or equal to the threshold
        0 -- otherwise
        """
        if np.sum(x) >= self.threshold:
            return 1
        else:
            return 0

# Example usage
# Assume x is the input data and threshold is the threshold value for the MP neuron

# Create an instance of MPNeuron with the desired threshold
neuron = MPNeuron(threshold=3)

# Call the activate method to compute the output of the MP neuron
output = neuron.activate(x)

# Access the output of the MP neuron
print("Output of the MP neuron: ", output)
```
In this example, we define a class `MPNeuron` which has a constructor that takes the threshold value as an argument. The activate method of the class implements the logic of the MP neuron, where it computes the sum of the input data `x` and compares it with the threshold. If the sum is greater than or equal to the threshold, it returns 1, otherwise it returns 0. You can create an instance of the `MPNeuron` class with the desired threshold value, and then call the activate method to compute the output of the MP neuron for a given input data `x`.

:::note Note

The MP neuron, is a simple mathematical model of an artificial neuron that has several limitations, including:

-   **Binary Output :** The MP neuron model produces binary outputs, typically 0 or 1, based on a threshold function. This binary nature of the output limits its ability to represent continuous and fine-grained patterns in data, as it cannot produce intermediate values.

-   **Linear Separability :** The MP neuron can only learn linearly separable patterns, meaning it can only classify data that can be separated by a linear decision boundary. It cannot effectively handle complex patterns that require non-linear decision boundaries, which are common in many real-world data sets.

-   **Lack of Learning :** The MP neuron model does not have an explicit learning mechanism. The weights and biases of the neuron are typically set manually or by trial and error, and there is no formal learning algorithm to automatically update these parameters based on the input data and desired outputs.

-   **Limited Representation Power :** The MP neuron has limited representation power as it can only model simple logical functions, such as AND, OR, and NOT. It may not be suitable for more complex tasks that require higher-level representations and abstraction.

-   **Lack of Flexibility :** The MP neuron model has fixed input and output dimensions, and cannot adapt to varying input data sizes or types. It may not be suitable for tasks that require handling variable-sized inputs, such as image recognition or natural language processing.

-   **Sensitivity to Noise :** The MP neuron model can be sensitive to noise in input data, as it relies on a binary threshold function. Small variations or noise in input data can result in significant changes in the output, leading to less robust and less reliable performance.

Despite these limitations, the MP neuron model has played an important historical role in the development of artificial neural networks and laid the foundation for more advanced and powerful models, such as the perceptron, sigmoid neuron, and deep neural networks, which have overcome many of these limitations and achieved state-of-the-art performance in various machine learning tasks.

:::

### Perceptron Neuron
Perceptron is a type of linear binary classifier, proposed by Frank Rosenblatt in 1957. It is an improvement over the MP neuron as it can learn the optimal weights during training to make accurate predictions. Perceptron uses a step function as the activation function and updates the weights based on a supervised learning rule called the perceptron learning rule. The perceptron model can be mathematically defined as follows:

```Latex
Output = 1, if (Σxi * wi) + b ≥ 0
Output = 0, otherwise
```
where xi are the input values, wi are the weights associated with the inputs, b is the bias, and the activation function is a step function.

:::tip Remark
For this neuron we will find the valuse of the weights and biases. 
:::

```python
import numpy as np

class Perceptron:
    def __init__(self, learning_rate=0.01, n_iterations=100):
        self.learning_rate = learning_rate
        self.n_iterations = n_iterations
        self.weights = None
        self.bias = None

    def train(self, X, y):
        """
        Trains the Perceptron model with input data X and target labels y.

        Arguments:
        X -- input data of shape (n_features, m)
        y -- target labels of shape (1, m)

        Returns:
        None
        """
        n_features = X.shape[0]
        m = X.shape[1]
        self.weights = np.zeros(n_features)
        self.bias = 0

        for _ in range(self.n_iterations):
            # Compute the weighted sum of inputs and the bias
            z = np.dot(self.weights, X) + self.bias

            # Apply step function as activation
            a = np.where(z > 0, 1, 0)

            # Update weights and bias
            self.weights -= self.learning_rate * np.dot(X, (a - y).T)
            self.bias -= self.learning_rate * np.sum(a - y)

    def predict(self, X):
        """
        Predicts the target labels for input data X.

        Arguments:
        X -- input data of shape (n_features, m)

        Returns:
        predictions -- predicted target labels of shape (1, m)
        """
        # Compute the weighted sum of inputs and the bias
        z = np.dot(self.weights, X) + self.bias

        # Apply step function as activation
        predictions = np.where(z > 0, 1, 0)

        return predictions

# Example usage
# Assume X is the input data and y is the target labels

# Create an instance of Perceptron with desired hyperparameters
perceptron = Perceptron(learning_rate=0.01, n_iterations=100)

# Train the Perceptron model
perceptron.train(X, y)

# Call the predict method to make predictions on new input data
predictions = perceptron.predict(X)

# Access the predicted target labels
print("Predicted target labels: ", predictions)
```
In this example, we define a class `Perceptron` which has a constructor that takes the learning rate and number of iterations as hyperparameters. The train method of the class implements the training logic of the Perceptron, where it computes the weighted sum of inputs and the bias, applies the step function as activation, and updates the weights and bias using the perceptron learning rule. The predict method of the class computes the predictions for a given input data `X` by applying the trained weights and bias, and returns the predicted target labels. You can create an instance of the Perceptron class with the desired hyperparameter values, and then call the train method to train the Perceptron model on your input data `X` and target labels `y`, and call the predict method to make predictions on new input data.

:::note Noted

The perceptron is a simple type of artificial neural network that was proposed by Frank Rosenblatt in 1958. While it has been an important milestone in the development of neural networks, it also has several limitations, including:

-   **Linear Separability :** The perceptron can only learn linearly separable patterns, meaning it can only classify data that can be separated by a linear decision boundary. It cannot effectively handle complex patterns that require non-linear decision boundaries, which are common in many real-world data sets.

-   **Binary Outputs :** The perceptron produces binary outputs, typically 0 or 1, based on a threshold activation function. This binary nature of the output limits its ability to represent continuous and fine-grained patterns in data, as it cannot produce intermediate values.

-   **Lack of Hidden Layers :** The perceptron has a single layer of output nodes and does not have any hidden layers. This limits its ability to learn complex patterns that require multiple levels of abstraction and representation. Deep neural networks with multiple hidden layers have been shown to be much more effective in capturing complex patterns in data.

-   **Lack of Learning Capacity :** The perceptron does not have the ability to learn from data in an unsupervised or semi-supervised manner. It relies on labeled training data and supervised learning, where the correct outputs are provided during training. It does not have any mechanisms for unsupervised learning, reinforcement learning, or transfer learning, which are important capabilities in modern neural networks.

-   **Sensitivity to Initial Weights :** The performance of the perceptron can be sensitive to the initial weights and biases, which are typically set randomly at the beginning of training. Poor initialization can lead to slow convergence or getting stuck in local optima during training.

-   **Lack of Flexibility :** The perceptron has fixed input and output dimensions, and cannot adapt to varying input data sizes or types. It may not be suitable for tasks that require handling variable-sized inputs, such as image recognition or natural language processing.

Despite these limitations, the perceptron has paved the way for more advanced and powerful neural network models, such as multi-layer perceptrons (MLPs), convolutional neural networks (CNNs), recurrent neural networks (RNNs), and transformer networks, which have overcome many of these limitations and achieved state-of-the-art performance in various machine learning and deep learning tasks.

:::

### Sigmoid Neuron
Sigmoid neuron is a type of artificial neuron that uses a sigmoid function as the activation function. The sigmoid function is a smooth, S-shaped curve that maps the weighted sum of inputs to a value between 0 and 1, allowing the neuron to produce continuous outputs. The sigmoid neuron model can be mathematically defined as follows:

```Latex
Output = 1 / (1 + exp(-(Σxi * wi) + b))
```
where xi are the input values, wi are the weights associated with the inputs, b is the bias, and the activation function is the sigmoid function.

```python
import numpy as np

class SigmoidNeuron:
    def __init__(self):
        self.w = None
        self.b = None

    def sigmoid(self, x):
        """
        Applies sigmoid activation function to input x.

        Arguments:
        x -- input data

        Returns:
        y -- output data
        """
        y = 1 / (1 + np.exp(-x))
        return y

    def fit(self, X, y, epochs=100, learning_rate=0.1):
        """
        Trains the Sigmoid Neuron model on input data X and target labels y.

        Arguments:
        X -- input data of shape (m, n)
        y -- target labels of shape (m, )
        epochs -- number of epochs for training (default: 100)
        learning_rate -- learning rate for training (default: 0.1)

        Returns:
        None
        """
        # Initialize weights and bias
        self.w = np.random.randn(X.shape[1])
        self.b = np.random.randn()

        # Loop over epochs
        for epoch in range(epochs):
            # Compute weighted sum of inputs and bias
            z = np.dot(X, self.w) + self.b

            # Apply sigmoid activation function
            y_pred = self.sigmoid(z)

            # Compute gradients
            dw = np.dot(X.T, (y_pred - y) * y_pred * (1 - y_pred))
            db = np.sum((y_pred - y) * y_pred * (1 - y_pred))

            # Update weights and bias
            self.w -= learning_rate * dw
            self.b -= learning_rate * db

    def predict(self, X):
        """
        Predicts the target labels for input data X.

        Arguments:
        X -- input data of shape (m, n)

        Returns:
        predictions -- predicted target labels of shape (m, )
        """
        # Compute weighted sum of inputs and bias
        z = np.dot(X, self.w) + self.b

        # Apply sigmoid activation function
        y_pred = self.sigmoid(z)

        # Apply threshold of 0.5 to get binary predictions
        predictions = (y_pred > 0.5).astype(int)

        return predictions
```

In this example, we define a class `SigmoidNeuron` which has a constructor that initializes the weights and bias to `None`. The sigmoid method of the class applies the sigmoid activation function to the input data x. The fit method of the class trains the Sigmoid Neuron model on input data X and target labels y, where it initializes the weights and bias, loops over epochs, computes the weighted sum of inputs and bias, applies the sigmoid activation function, computes gradients using the derivative of the sigmoid function, and updates the weights and bias using gradient descent. The predict method of the class computes the predicted target labels for input data X by computing the weighted sum of inputs and bias, applying the sigmoid activation function, and thresholding the output at 0.5 to get binary predictions. You can create an instance of the SigmoidNeuron class, call the fit method to train the model on your input data X and target labels y, and call the predict method to make predictions on new input data.

### 

## Activation functions

Activation functions play a critical role in deep learning models as they introduce non-linearity, which allows neural networks to learn complex patterns and representations from data. Here are some commonly used activation functions in deep learning:

### Sigmoid
The sigmoid activation function is defined as f(x) = 1 / (1 + exp(-x)), where exp(x) is the exponential function. It squashes the input values to a range between 0 and 1, making it suitable for binary classification tasks where the output needs to be interpreted as a probability. However, the sigmoid function suffers from the vanishing gradient problem, which can result in slow convergence during training.

Sigmoid activation function using python
```python
import numpy as np

def sigmoid(x):
    return 1 / (1 + np.exp(-x))

# Example usage
x = np.array([1, 2, 3])
sigmoid_output = sigmoid(x)
print(sigmoid_output)
```

### Hyperbolic Tangent (tanh)
The tanh activation function is similar to the sigmoid function, but it maps the input values to a range between -1 and 1. It is also commonly used in neural networks for binary classification tasks and can help mitigate the vanishing gradient problem compared to the sigmoid function.

```python
import numpy as np

def tanh(x):
    return np.tanh(x)

# Example usage
x = np.array([1, 2, 3])
tanh_output = tanh(x)
print(tanh_output)
```

### Rectified Linear Unit (ReLU)
The ReLU activation function is defined as f(x) = max(0, x), where x is the input. It is one of the most popular activation functions used in deep learning due to its computational efficiency and ability to mitigate the vanishing gradient problem. ReLU allows the model to learn sparse representations by setting negative values to zero, but it may also suffer from the "dying ReLU" problem where some neurons become permanently inactive.

```python
import numpy as np

def relu(x):
    return np.maximum(0, x)

# Example usage
x = np.array([-1, 2, 3])
relu_output = relu(x)
print(relu_output)
```

### Leaky ReLU (LReLU)
The Leaky ReLU activation function is a variant of ReLU that allows a small slope for negative input values, preventing the "dying ReLU" problem. It is defined as f(x) = max(alpha * x, x), where alpha is a small positive constant.

```python
import numpy as np

def leaky_relu(x, alpha=0.01):
    return np.where(x > 0, x, alpha * x)

# Example usage
x = np.array([-1, 2, 3])
leaky_relu_output = leaky_relu(x, alpha=0.01)
print(leaky_relu_output)
```
### Softmax
The softmax activation function is used for multi-class classification tasks where the goal is to assign an input to one of several mutually exclusive classes. It outputs a probability distribution over all the classes, with the highest probability indicating the predicted class. Softmax is commonly used in the output layer of a neural network for multi-class classification tasks.

```python
import numpy as np

def softmax(x):
    exp_x = np.exp(x - np.max(x, axis=-1, keepdims=True)) # Subtract max value for numerical stability
    return exp_x / np.sum(exp_x, axis=-1, keepdims=True)

# Example usage
x = np.array([1, 2, 3])
softmax_output = softmax(x)
print(softmax_output)
```

### Others
There are many other activation functions used in deep learning, such as the Parametric ReLU (PReLU), Exponential Linear Unit (ELU), Swish, and more. These activation functions have different properties and are used in specific scenarios based on the requirements of the task and the characteristics of the data.

It is important to choose the appropriate activation function based on the task, data, and model architecture to ensure effective training and good performance of deep learning models.

## Forward propagation
Forward propagation is the process of computing the output of a neural network given an input. It involves passing the input through the layers of the neural network from the input layer to the output layer, and applying activation functions at each layer to produce the final output.

Here's a high-level overview of the forward propagation process in deep learning:

-   **Initialize the input  :** The input to the neural network is usually represented as a vector or a matrix, depending on the number of features or inputs.

-   **Compute the weighted sum :** For each layer in the neural network, compute the weighted sum of the inputs. The weighted sum is calculated by multiplying the input by the weight matrix and adding the bias vector.

-   **Apply activation function :** Apply an activation function to the weighted sum. Activation functions introduce non-linearity into the neural network, allowing it to learn complex patterns in the data.

-   **Repeat steps 2 and 3 for each layer :** Repeat the process of computing the weighted sum and applying the activation function for each layer in the neural network, starting from the input layer and moving towards the output layer.

-   **Obtain the final output :** Once the input has passed through all the layers, the final output is obtained. This output can be used for making predictions or further processing, depending on the task at hand (e.g., classification, regression, etc.).

Here's an example of implementing forward propagation for a simple feedforward neural network in Python using the NumPy library:
```python
import numpy as np

# Define input
input_data = np.array([1, 2, 3])

# Define weights and biases
weights1 = np.random.randn(3, 4)  # Randomly initialized weights for the first layer
bias1 = np.random.randn(4)  # Randomly initialized biases for the first layer
weights2 = np.random.randn(4, 2)  # Randomly initialized weights for the second layer
bias2 = np.random.randn(2)  # Randomly initialized biases for the second layer

# Forward propagation
# Layer 1
weighted_sum1 = np.dot(input_data, weights1) + bias1
activation1 = sigmoid(weighted_sum1)

# Layer 2
weighted_sum2 = np.dot(activation1, weights2) + bias2
activation2 = softmax(weighted_sum2)

# Output
output = activation2
print("Output:", output)
```

## Backpropagation
Backpropagation is an optimization algorithm used in deep learning to train neural networks. It is an efficient way to compute the gradients of the loss function with respect to the weights and biases of the neural network, which are then used to update the weights and biases in the opposite direction of the gradient in order to minimize the loss function.

Here's a high-level overview of the backpropagation process in deep learning:

-   **Forward propagation :** Compute the weighted sum and apply the activation function for each layer in the neural network, as explained in the forward propagation step. Store the intermediate values (weighted sums and activations) for each layer, as they will be used during backpropagation.

-   **Compute the loss :** Compare the predicted output obtained from the forward propagation with the ground truth or target output, and compute the loss or error. The loss function is usually chosen based on the specific task (e.g., mean squared error for regression, cross-entropy loss for classification).

-   **Compute the gradients :** Compute the gradients of the loss with respect to the activations of the output layer. This can usually be done using the chain rule of calculus, starting from the output layer and moving towards the input layer. Compute the gradients of the loss with respect to the weighted sums of each layer using the gradients of the activations and the derivative of the activation function.

-   **Update the weights and biases :** Use the computed gradients to update the weights and biases of the neural network. The most commonly used optimization algorithms for this step are gradient descent and its variants, such as stochastic gradient descent (SGD), mini-batch gradient descent, and adaptive optimization algorithms like Adam, RMSprop, etc.

-   **Repeat steps 1-4 :** Repeat the process of forward propagation, computing the loss, computing the gradients, and updating the weights and biases for a certain number of iterations or until convergence criteria are met.

Here's an example of implementing backpropagation for a simple feedforward neural network in Python using the NumPy library:

```python
import numpy as np

# Define sigmoid activation function
def sigmoid(x):
    return 1 / (1 + np.exp(-x))

# Define derivative of sigmoid activation function
def sigmoid_derivative(x):
    return sigmoid(x) * (1 - sigmoid(x))

# Define input data, weights, biases, and target output
input_data = np.array([1, 2, 3])
weights1 = np.random.randn(3, 4)
bias1 = np.random.randn(4)
weights2 = np.random.randn(4, 2)
bias2 = np.random.randn(2)
target_output = np.array([0.7, 0.3])

# Forward propagation
weighted_sum1 = np.dot(input_data, weights1) + bias1
activation1 = sigmoid(weighted_sum1)
weighted_sum2 = np.dot(activation1, weights2) + bias2
activation2 = sigmoid(weighted_sum2)

# Compute the loss
loss = np.sum(0.5 * (activation2 - target_output) ** 2)

# Backpropagation
# Compute the gradients
grad_activation2 = activation2 - target_output
grad_weight2 = np.dot(activation1.T, grad_activation2)
grad_bias2 = np.sum(grad_activation2, axis=0)
grad_activation1 = np.dot(grad_activation2, weights2.T) * sigmoid_derivative(weighted_sum1)
grad_weight1 = np.dot(input_data.reshape(-1, 1), grad_activation1)
grad_bias1 = np.sum(grad_activation1, axis=0)

# Update the weights and biases
learning_rate = 0.01
weights2 -= learning_rate * grad_weight2
bias2 -= learning_rate * grad_bias2
weights1 -= learning_rate * grad_weight1
bias1 -= learning_rate * grad_bias1
```
:::note Note

This is a simplified example and may not be suitable for more complex neural networks. It assumes a simple feedforward neural network with a single hidden layer, using the sigmoid activation function, mean squared error (MSE) as the loss function, and gradient descent as the optimization algorithm. In practice, deep learning frameworks like TensorFlow and PyTorch provide more efficient and optimized implementations of backpropagation for various types of neural networks with different activation functions, loss functions, and optimization algorithms.

:::


## Loss functions
Loss functions, also known as cost functions or objective functions, are mathematical functions that measure the discrepancy between the predicted output and the true target output in a deep learning model. Loss functions are used to quantify how well a model is performing and guide the optimization process during training to update the model's parameters. The choice of an appropriate loss function depends on the specific task or problem being solved, such as classification, regression, or other specialized tasks. Here are some commonly used loss functions in deep learning:

### Mean Squared Error (MSE)
MSE is commonly used for regression problems, where the goal is to predict a continuous value. It measures the average of the squared differences between the predicted and true values.

:::tip Note
Mean Squared Error (MSE):
$J(y, \hat{y}) = \frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2$

where:
- $J(y, \hat{y})$ represents the loss function
- $y$ represents the true target values or class labels
- $\hat{y}$ represents the predicted values or class probabilities
- $n$ is the number of samples in the dataset
- $y_i$ and $\hat{y}_i$ represent the true and predicted values for the $i$-th sample, respectively
:::

Code in python
```python
import numpy as np

def mean_squared_error(y_true, y_pred):
    n = len(y_true)
    mse = np.sum((y_true - y_pred)**2) / n
    return mse
```
### Binary Cross-Entropy (BCE)
BCE is commonly used for binary classification problems, where the goal is to classify input samples into one of two classes. It measures the cross-entropy between the true binary labels and the predicted probabilities.

:::tip Note
Binary Cross-Entropy (BCE):
$J(y, \hat{y}) = -\frac{1}{n} \sum_{i=1}^{n} \left( y_i \log(\hat{y}_i) + (1 - y_i) \log(1 - \hat{y}_i) \right)$

where:
- $J(y, \hat{y})$ represents the loss function
- $y$ represents the true target values or class labels
- $\hat{y}$ represents the predicted values or class probabilities
- $n$ is the number of samples in the dataset
- $y_i$ and $\hat{y}_i$ represent the true and predicted values for the $i$-th sample, respectively
:::

Code Example in python
```python
import numpy as np

def binary_cross_entropy(y_true, y_pred):
    n = len(y_true)
    bce = -(np.sum(y_true * np.log(y_pred) + (1 - y_true) * np.log(1 - y_pred))) / n
    return bce
```


### Categorical Cross-Entropy (CCE)
CCE is commonly used for multi-class classification problems, where the goal is to classify input samples into one of multiple classes. It measures the cross-entropy between the true class labels and the predicted class probabilities. 

:::tip Note
Categorical Cross-Entropy (CCE):
$J(y, \hat{y}) = -\frac{1}{n} \sum_{i=1}^{n} \sum_{j=1}^{C} y_{ij} \log(\hat{y}_{ij})$

where:
- $J(y, \hat{y})$ represents the loss function
- $y$ represents the true target values or class labels
- $\hat{y}$ represents the predicted values or class probabilities
- $n$ is the number of samples in the dataset
- $C$ is the number of classes (applicable for Categorical Cross-Entropy)
- $y_i$ and $\hat{y}_i$ represent the true and predicted values for the $i$-th sample, respectively
- $y_{ij}$ and $\hat{y}_{ij}$ represent the true and predicted probabilities for the $i$-th sample and $j$-th class, respectively.
:::
Code example in python:
```python
import numpy as np

def categorical_cross_entropy(y_true, y_pred):
    n = len(y_true)
    cce = -(np.sum(y_true * np.log(y_pred))) / n
    return cce

# Generate some sample data
# num_classes = 3
# batch_size = 4
# True target values (one-hot encoded)
y_true = np.array([[1, 0, 0], [0, 1, 0], [0, 0, 1], [1, 0, 0]])

# Predicted probability values
y_pred = np.array([[0.8, 0.1, 0.1], [0.2, 0.7, 0.1], [0.1, 0.2, 0.7], [0.9, 0.05, 0.05]])

# Compute categorical cross-entropy loss
cce = categorical_cross_entropy(y_true, y_pred)

print("Categorical Cross-Entropy Loss: ", cce)

```
:::note Note
Note: The above implementations assume that `y_true` and `y_pred` are numpy arrays representing the true target values and predicted values respectively, and they are of the same shape.
:::
## Optimizers
Optimizers are algorithms used in deep learning to adjust the parameters of a neural network model during the training process in order to minimize the loss or error of the model. They are an essential component of most neural network training algorithms as they help in finding the optimal values for the model's parameters that can lead to better performance.

Sure! Here are the mathematical equations for some popular optimization algorithms used in deep learning, along with their corresponding Python code implementations using TensorFlow:

### SGD

Mathematical Equation:

$W_{t+1} = W_t - \alpha \cdot \nabla J(W_t)$

where $W_t$ is the weight at time step $t$, $\alpha$ is the learning rate, and $\nabla J(W_t)$ is the gradient of the loss function with respect to the weights at time step $t$.

Python Code:
```python
from tensorflow.keras.optimizers import SGD

optimizer = SGD(lr=0.01)
```

### Adam

Mathematical Equation:

$m_t = \beta_1 \cdot m_{t-1} + (1 - \beta_1) \cdot \nabla J(W_t)$

$v_t = \beta_2 \cdot v_{t-1} + (1 - \beta_2) \cdot (\nabla J(W_t))^2$

$\hat{m}_t = \frac{m_t}{1 - \beta_1^t}$

$\hat{v}_t = \frac{v_t}{1 - \beta_2^t}$

$W_{t+1} = W_t - \alpha \cdot \frac{\hat{m}_t}{\sqrt{\hat{v}_t} + \epsilon}$

where $m_t$ and $v_t$ are the first and second moments of the gradients, $\beta_1$ and $\beta_2$ are the decay rates for the first and second moments, $\hat{m}_t$ and $\hat{v}_t$ are the bias-corrected moments, $\epsilon$ is a small value to avoid division by zero, and $\alpha$ is the learning rate.

Python Code:
```python
from tensorflow.keras.optimizers import Adam

optimizer = Adam(lr=0.001, beta_1=0.9, beta_2=0.999)
```

### RMSprop

Mathematical Equation:

$v_t = \rho \cdot v_{t-1} + (1 - \rho) \cdot (\nabla J(W_t))^2$

$W_{t+1} = W_t - \alpha \cdot \frac{\nabla J(W_t)}{\sqrt{v_t} + \epsilon}$

where $v_t$ is the exponential moving average of the squared gradients, $\rho$ is the decay rate, $\epsilon$ is a small value to avoid division by zero, and $\alpha$ is the learning rate.

Python Code:
```python
from tensorflow.keras.optimizers import RMSprop

optimizer = RMSprop(lr=0.001, rho=0.9)
```

### Adagrad

Mathematical Equation:

$v_t = v_{t-1} + (\nabla J(W_t))^2$

$W_{t+1} = W_t - \alpha \cdot \frac{\nabla J(W_t)}{\sqrt{v_t} + \epsilon}$

where $v_t$ is the sum of squared gradients up to time step $t$, $\epsilon$ is a small value to avoid division by zero, and $\alpha$ is the learning rate.

Python Code:
```python
from tensorflow.keras.optimizers import Adagrad

optimizer = Adagrad(lr=0.01)
```

### Adadelta

Mathematical Equation:
$v_t = \rho \cdot v_{t-1} + (1 - \rho) \cdot (\nabla J(W_t))^2$

$\Delta W_t = - \frac{\sqrt{s_{t-1}}}{\sqrt{v_t + \epsilon}} \cdot \nabla J(W_t)$

$s_t = \rho \cdot s_{t-1} + (1 - \rho) \cdot (\Delta W_t)^2$

$W_{t+1} = W_t + \Delta W_t$

where $v_t$ is the exponentially decaying average of the squared gradients, $\Delta W_t$ is the update to the weights, $s_t$ is the exponentially decaying average of the squared updates, $\rho$ is the decay rate, $\epsilon$ is a small value to avoid division by zero, and $\alpha$ is the learning rate.

Python Code:
```python
from tensorflow.keras.optimizers import Adadelta

optimizer = Adadelta(lr=1.0, rho=0.95)
```

### Nadam

Mathematical Equation:

$m_t = \beta_1 \cdot m_{t-1} + (1 - \beta_1) \cdot \nabla J(W_t)$

$v_t = \beta_2 \cdot v_{t-1} + (1 - \beta_2) \cdot (\nabla J(W_t))^2$

$\hat{m}_t = \frac{m_t}{1 - \beta_1^t}$

$\hat{v}_t = \frac{v_t}{1 - \beta_2^t}$

$\Delta W_t = - \frac{\hat{m}_t}{\sqrt{\hat{v}_t} + \epsilon}$

$W_{t+1} = W_t + \Delta W_t$

where $m_t$ and $v_t$ are the first and second moments of the gradients, $\beta_1$ and $\beta_2$ are the decay rates for the first and second moments, $\hat{m}_t$ and $\hat{v}_t$ are the bias-corrected moments, $\epsilon$ is a small value to avoid division by zero, and $\alpha$ is the learning rate.

Python Code:
```python
from tensorflow.keras.optimizers import Nadam

optimizer = Nadam(lr=0.001, beta_1=0.9, beta_2=0.999)
```
:::note Note
The above equations are general representations of the optimization algorithms and may vary slightly depending on the implementation details of the deep learning library being used. It's always recommended to refer to the official documentation of the specific library for accurate and up-to-date information on the implementation of these optimizers.
:::