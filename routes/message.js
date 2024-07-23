const express = require('express');
const router = express.Router();

module.exports = function(messages) {
    // Message route
    router.get('/', (req, res) => {
        res.render('message');
    });

    // Handle message submission
    router.post('/', (req, res) => {
        const { message, name } = req.body;
        const timestamp = new Date().toLocaleString(); // Capture current timestamp
        messages.push({ message, name, timestamp }); // Store message details with name and timestamp
        res.redirect('/'); // Redirect back to the main page
    });

    // Message details route
    router.get('/:id', (req, res) => {
        const messageId = req.params.id;
        const message = messages[messageId];
        if (!message) {
            res.status(404).send('Message not found');
        } else {
            res.render('messageDetails', { message });
        }
    });

    return router;
};
