const { getAllProducts, getProductsById,
  postNewProduct, updateProduct } = require('./ProductController');
const { getAllSales, getSalesById } = require('./SalesController');

module.exports = {
  getAllProducts,
  getProductsById,
  postNewProduct,
  updateProduct,
  getAllSales,
  getSalesById,
};