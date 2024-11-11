const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Route to handle the /appreciate command
app.post('/appreciate', (req, res) => {
  // Respond with a message containing the Google Form link
  res.json({
    response_type: 'in_channel', // 'ephemeral' for a private message to the user
    text: 'Click [here](https://forms.gle/eZ9L3v5xBWn94RwD7) to appreciate happyxen!'
  });
});

// Simple GET route for testing
app.get('/', (req, res) => {
  res.send('Slack Appreciate App is running!');
});

// Start the server
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
