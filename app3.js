import express from 'express';
import colleges from './data/colleges.json' with { type: 'json' };

const app = express();
const port = 3000;

// URL: http://localhost:3000/colleges
app.get('/colleges', (req, res) => {
    res.json(colleges); // Sending college data as JSON response
});

// URL: http://localhost:3000/college-list
app.get('/college-list', (req, res) => {
    res.json(colleges); // Sending same data but with another endpoint
});

// Create new college data
// URL: http://localhost:3000/create-college
app.post('/create-college', (req, res) => {
    res.send('Creating a new object for another college using "/create-college"');
});

// Update existing college data
// URL: http://localhost:3000/update-college
app.put('/update-college', (req, res) => {
    res.send('Updating an object of an existing college using "/update-college"');
});

// Delete a college data
// URL: http://localhost:3000/delete-college
app.delete('/delete-college', (req, res) => {
    res.send('Deleting an existing college object using "/delete-college"');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at: http://localhost:${port}/colleges`);
});