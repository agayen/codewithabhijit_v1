In PyTorch, you can save and evaluate a trained model using the following steps:

1. Save the trained model: After training your model, you can save it to a file using the `torch.save()` function. This function takes two arguments: the model's state dictionary and the file path where you want to save the model. Here's an example:

```python
# Assuming you have a trained model named 'model' and a file path to save the model
# Example file path: 'model.pth'

# Save the model's state dictionary to a file
torch.save(model.state_dict(), 'model.pth')
```

2. Load the saved model: To evaluate the saved model, you first need to load it back into memory using the `torch.load()` function. This function takes the file path of the saved model as an argument and returns the model's state dictionary. Here's an example:

```python
# Load the saved model's state dictionary from the file
model_state_dict = torch.load('model.pth')
```

3. Create a new instance of the model: Next, you need to create a new instance of the model, with the same architecture and hyperparameters as the trained model. You can do this by calling the model's constructor and passing any required parameters. Here's an example:

```python
# Assuming you have a model class named 'MyModel' and the same architecture as the trained model
# Example hyperparameters: input_size, hidden_size, output_size

# Create a new instance of the model
eval_model = MyModel(input_size, hidden_size, output_size)
```

4. Load the saved model's state dictionary: Once you have a new instance of the model, you can load the saved model's state dictionary into it using the `load_state_dict()` method. This method takes the state dictionary as an argument and updates the model's parameters with the saved values. Here's an example:

```python
# Load the saved model's state dictionary into the evaluation model
eval_model.load_state_dict(model_state_dict)
```

5. Evaluate the model: Now that you have the loaded model, you can use it for evaluation. You can call the model's `eval()` method to set it to evaluation mode, and then pass your evaluation data through the model to get predictions. Here's an example:

```python
# Assuming you have evaluation data named 'eval_data' and want to get predictions

# Set the evaluation model to evaluation mode
eval_model.eval()

# Pass the evaluation data through the model to get predictions
with torch.no_grad():
    predictions = eval_model(eval_data)
```

Note: When evaluating a model, it's important to set it to evaluation mode using the `eval()` method, as it disables any layers or operations that are used for training, such as dropout or batch normalization. Also, remember to use the `torch.no_grad()` context to disable gradient computation during evaluation to save memory and computation.