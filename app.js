const express = require('express');
const app = express();
const PORT = 3000;

const mainRoutes = require('./routes/main');
const messageRoutes = require('./routes/message');

// Middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

let messages = [];

app.use('/', mainRoutes(messages));
app.use('/message', messageRoutes(messages));

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
