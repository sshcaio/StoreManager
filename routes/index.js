const express = require('express');
const controllers = require('../controllers');

const router = express.Router();

router.get('/products', controllers.getAllProducts);
router.get('/products/:id', controllers.getProductsById);

module.exports = router;
