const express = require('express');
const homeRouter = require('./routes/userRouter');
const server = express();

// Middleware
server.use('/', homeRouter);

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});