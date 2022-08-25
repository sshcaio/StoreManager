const { getAll, getById, createProduct, editProduct } = require('../models/ProductsModel');

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

const putProduct = async (id, name) => {
  const update = editProduct(id, name);
  if (update.length <= 0) {
    return null
  }
  return update;
}

module.exports = {
  getProducts,
  postProduct,
  putProduct,
};