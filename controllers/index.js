const { getAllProducts, getProductsById, postNewProduct } = require('./ProductController');
const { getAllSales, getSalesById } = require('./SalesController');

module.exports = {
  getAllProducts,
  getProductsById,
  postNewProduct,
  getAllSales,
  getSalesById,
};