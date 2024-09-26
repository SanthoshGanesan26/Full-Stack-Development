const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'form.html'));
});

// Process the form submission
app.post('/calculate', (req, res) => {
    const subject1 = parseFloat(req.body.subject1);
    const subject2 = parseFloat(req.body.subject2);
    const subject3 = parseFloat(req.body.subject3);
    const subject4 = parseFloat(req.body.subject4);
    const subject5 = parseFloat(req.body.subject5);

    const total = subject1 + subject2 + subject3 + subject4 + subject5;

    res.send(`<h1>Total Marks: ${total}</h1><a href="/">Go Back</a>`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
