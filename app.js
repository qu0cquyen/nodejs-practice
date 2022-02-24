const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Global configuration
// Template Engine is used for generating dynamic HTML
// Set `Template Engine` langauge to `Pug` 
app.set('view engine', 'pug');
// Telling Express to Compile templates with 
// the `Pug Engine` and where to find these templates
app.set('views', 'views');

// Can omit the .js at the end of the file since
// it will get added automatically
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const PORT = process.env.PORT || 3000;

// Register a middleware 
// This will automatically call next() 
// This will do the whole request parsing (request body)
// But not for file
app.use(bodyParser.urlencoded({ extended: false }));

// Public a CSS folder, so that user can access it
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).send('<h1>Page not found</h1>');
    res.status(404).sendFile(path.join(__dirname, 'views', 'page-not-found.html'));

});

app.listen(PORT);

