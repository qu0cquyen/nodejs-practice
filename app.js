const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
    console.log('Hello World');
})

app.listen(PORT);

