const express = require('express');
const controllers = require('../controllers');
const nameValidation = require('../middleware/nameValidation');

const router = express.Router();

router.get('/products', controllers.getAllProducts);
router.get('/products/:id', controllers.getProductsById);
router.post('/products', nameValidation, controllers.postNewProduct);

module.exports = router;
