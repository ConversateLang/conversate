    // server.js
    const express = require('express');
    const app = express();
    const port = 3000; // Or any other available port

    // Middleware to parse JSON request bodies
    app.use(express.json());

    // Define a simple GET route
    app.get('/', (req, res) => {
        res.send('Hello from the Node.js backend!');
    });

    // Define a POST route
    app.post('/api/data', (req, res) => {
        const receivedData = req.body;
        console.log('Received data:', receivedData);
        res.json({ message: 'Data received successfully!', data: receivedData });
    });

    // Start the server
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });