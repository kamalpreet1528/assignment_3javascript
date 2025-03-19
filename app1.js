import express from 'express';
const app = express();
const port = 3000;

// Home route displaying group names
app.get('/', (req, res) => {
    res.send('<h1>Group Members</h1><ul><li>Sevansh Saini</li><li>Kamalpreet Singh</li></ul>');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at: http://localhost:${port}`);
});