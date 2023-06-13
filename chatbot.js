const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Define a route for the chatbot endpoint
app.post('/chatbot', (req, res) => {
  // Retrieve user input from the request
  const userInput = req.body.user_input;

  // Process user input and generate a response
  const response = generateResponse(userInput);

  // Return the response to the user
  res.send(response);
});

// Function to generate a response based on user input
function generateResponse(userInput) {
  // Convert user input to lowercase for easier matching
  const input = userInput.toLowerCase();

  // Define some example rules and responses
  const rules = [
    { pattern: 'hello', response: 'Hi, how can I help you?' },
    { pattern: 'how are you', response: 'I am doing well, thank you!' },
    { pattern: 'goodbye', response: 'Goodbye! Have a great day!' },
    { pattern: 'help', response: 'I m here to assist you. How can I help you?'},
    // Add more rules and responses as needed
  ];

  // Check user input against the defined rules
  for (let i = 0; i < rules.length; i++) {
    const rule = rules[i];
    if (input.includes(rule.pattern)) {
      return rule.response;
    }
  }

  // If no matching rule is found, return a default response
  return "I'm sorry, I didn't understand. Can you please rephrase your query?";
}

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Chatbot server listening on port ${port}`);
});
