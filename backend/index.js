const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON bodies

// Register user routes

app.get('/', (req, res) => {
    res.send('Hello from Firebase Firestore + Node.js API!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});