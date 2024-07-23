const express = require('express');
const router = express.Router();

module.exports = function(messages) {
    router.get('/', (req, res) => {
        res.render('index', { messages });
    });

    return router;
};
