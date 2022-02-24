const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Can omit the .js at the end of the file since
// it will get added automatically
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const PORT = process.env.PORT || 3000;

// Register a middleware 
// This will automatically call next() 
// This will do the whole request parsing (request body)
// But not for file
app.use(bodyParser.urlencoded({ extended: false }));

// Public a CSS folder, so that user can access it
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).send('<h1>Page not found</h1>');
    res.status(404).sendFile(path.join(__dirname, 'views', 'page-not-found.html'));

});

app.listen(PORT);

