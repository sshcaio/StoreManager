const { getAll, getById, createProduct } = require('../models/ProductsModel');

const getProducts = async (id = null) => {
  if (!id) {
    const result = await getAll();
    return result;
  }
  const result = await getById(id);
  if (!result) return null;
  return result;
};

const postProduct = async (name) => {
  const result = createProduct(name);
  return result;
};

module.exports = {
  getProducts,
  postProduct,
};