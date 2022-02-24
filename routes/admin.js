const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// Route Handling
router.get('/add-product', (req, res, next) => {
    // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</input></form>');
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router; 