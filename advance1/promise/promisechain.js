/*
Certainly! Here’s a task that involves using multiple functions with promise chaining to perform a sequence of asynchronous operations:

### Task: Sequential Data Processing with Functions

#### Description
1. **Fetch Data**: Retrieve data from an API.
2. **Process Data**: Apply some transformations to the data.
3. **Save Data**: Simulate saving the processed data to a server.
4. **Handle Errors**: Manage any errors that occur during these operations.

#### Instructions

1. **Create Functions**:
   - **`fetchData`**: Fetch data from `https://jsonplaceholder.typicode.com/comments`.
   - **`processData`**: Filter and transform the data. For example, filter comments with an email domain of `example.com` and extract their `name` property.
   - **`saveData`**: Simulate saving the processed data to a server with a mock API. Use a placeholder URL like `https://jsonplaceholder.typicode.com/posts`.

2. **Chain Promises**:
   - Call `fetchData`, then use `.then()` to process the data with `processData`.
   - Use `.then()` again to simulate saving the processed data with `saveData`.
   - Use `.catch()` to handle any errors that occur in the chain.

### Example Code

```javascript
// Function to fetch data from an API
function fetchData() {
    return fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        });
}

// Function to process the data (filter and transform)
function processData(data) {
    // Filter comments with email domain 'example.com' and extract names
    const filtered = data.filter(comment => comment.email.endsWith('@example.com'));
    const names = filtered.map(comment => comment.name);
    return Promise.resolve(names); // Return a resolved promise with the names
}

// Function to simulate saving data to a server
function saveData(data) {
    // Simulate saving the processed data with a POST request
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ names: data })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to save data');
        }
        return response.json();
    });
}

// Chain promises to fetch, process, and save data
fetchData()
    .then(data => processData(data)) // Process data after fetching
    .then(names => saveData(names))  // Save the processed data
    .then(result => {
        // Handle the result of saving
        console.log('Data saved successfully:', result);
    })
    .catch(error => {
        // Handle any errors that occur
        console.error('Error occurred:', error);
    });
```

### Steps
1. **Fetch Data**: Call `fetchData` to retrieve data from the API.
2. **Process Data**: Use `processData` to filter and transform the fetched data.
3. **Save Data**: Use `saveData` to simulate saving the processed data to a server.
4. **Handle Results and Errors**: Use `.then()` to handle the result of saving and `.catch()` to manage any errors.

This task demonstrates how to chain multiple functions that each return promises, allowing for sequential execution of asynchronous operations.


*/