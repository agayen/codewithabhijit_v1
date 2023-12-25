FFN stands for Feed-Forward Neural Network, which is a type of deep learning model where information flows in one direction, from input to output, without any recurrent connections. Here's an example of how you can implement a simple FFN using PyTorch, along with a dataset for training:

```python
import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import Dataset, DataLoader

# Define the FFN model
class FFN(nn.Module):
    def __init__(self, input_size, hidden_size, output_size):
        super(FFN, self).__init__()
        self.fc1 = nn.Linear(input_size, hidden_size)
        self.relu = nn.ReLU()
        self.fc2 = nn.Linear(hidden_size, output_size)
    
    def forward(self, x):
        x = self.fc1(x)
        x = self.relu(x)
        x = self.fc2(x)
        return x

# Define the custom dataset
class CustomDataset(Dataset):
    def __init__(self, data, targets):
        self.data = torch.tensor(data, dtype=torch.float32)
        self.targets = torch.tensor(targets, dtype=torch.float32)
    
    def __getitem__(self, index):
        x = self.data[index]
        y = self.targets[index]
        return x, y
    
    def __len__(self):
        return len(self.data)

# Define hyperparameters
input_size = 10
hidden_size = 64
output_size = 1
learning_rate = 0.001
batch_size = 32
num_epochs = 10

# Create some dummy data and targets for demonstration
data = torch.randn(100, input_size)
targets = torch.randn(100, output_size)

# Create instances of the FFN model and custom dataset
model = FFN(input_size, hidden_size, output_size)
dataset = CustomDataset(data, targets)

# Create a data loader for batching
dataloader = DataLoader(dataset, batch_size=batch_size, shuffle=True)

# Define the loss function and optimizer
criterion = nn.MSELoss()
optimizer = optim.Adam(model.parameters(), lr=learning_rate)

# Training loop
for epoch in range(num_epochs):
    for batch_idx, (x, y) in enumerate(dataloader):
        # Zero the gradients
        optimizer.zero_grad()
        
        # Forward pass
        outputs = model(x)
        
        # Compute loss
        loss = criterion(outputs, y)
        
        # Backward pass
        loss.backward()
        
        # Update weights
        optimizer.step()
        
        # Print training progress
        if batch_idx % 10 == 0:
            print(f'Epoch [{epoch+1}/{num_epochs}], Batch [{batch_idx+1}/{len(dataloader)}], Loss: {loss.item():.4f}')

# After training, you can use the trained model for making predictions on new data
# by calling model.eval() and passing input data through the model's forward method
# For example:
model.eval()
test_data = torch.randn(10, input_size)
test_outputs = model(test_data)
print("Test Outputs:")
print(test_outputs)
```

In this example, we define an FFN model using the `nn.Module` class from PyTorch, and implement a custom dataset for training. We use the `DataLoader` class to create a data loader for batching the data during training. We also define hyperparameters such as learning rate, batch size, and number of epochs. The training loop iterates over the data loader, performs forward and backward passes, and updates the model's weights using the Adam optimizer. Finally, we demonstrate how to use the trained model for making predictions on new data after training.