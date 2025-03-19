import express from 'express';
import colleges from './data/colleges.json' with { type: 'json' }; // Import JSON data

const app = express();
const port = 3000;

// URL: http://localhost:3000/
app.get('/', (req, res) => {
    res.send('<h1>Welcome to Ontario Colleges API</h1>');
});

// URL: http://localhost:3000/colleges
app.get('/colleges', (req, res) => {
    res.json(colleges);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at: http://localhost:${port}/colleges`);
});