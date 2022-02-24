const express = require('express');
const path = require('path');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    // res.send('<h1>Hello from Express</h1>');
    console.log(adminData.products);
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));

    const products = adminData.products;

    // Don't need to add .pug since we define the pug engine as 
    // a default template
    // Pass to the template a JSON object
    res.render('shop', { prods: products, docTitle: 'Shop' });
});


module.exports = router;