const { getAllProducts, getProductsById,
  postNewProduct, updateProduct, deleteProductById } = require('./ProductController');
const { getAllSales, getSalesById } = require('./SalesController');

module.exports = {
  getAllProducts,
  getProductsById,
  postNewProduct,
  updateProduct,
  deleteProductById,
  getAllSales,
  getSalesById,
};