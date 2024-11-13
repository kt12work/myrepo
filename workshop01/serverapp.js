const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5555;

// Set up EJS as the template engine
app.set('view engine', 'ejs');

// Serve static files (like CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the homepage
app.get('/', (req, res) => {
  // List of strings
  const items = [
    "Logic will get you from A to B. Imagination will take you everywhere",
    "There are 10 kinds of people. Those who know binary and those who don't",
    "There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies and the other is to make it so complicated that there are no obvious deficiencies",
    "It's not that I'm so smart, it's just that I stay with problems longer.",
    "It is pitch dark. You are likely to be eaten by a grue."
  ];

  // Randomly select one item from the array
  const randomItem = getRandomItem(items);

  // Render the index.ejs view and pass the random item
  res.render('index', { item: randomItem });
});

// Function to get a random item from an array
function getRandomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
