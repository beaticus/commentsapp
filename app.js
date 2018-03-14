const express = require('express');
const app = express();

const commentRoutes = require('./api/routes/comments');

app.use('/comments', commentRoutes);

module.exports = app;