const { getProducts } = require('../services/ProductsService');

const getAllProducts = async (_request, response) => {
  try {
    const result = await getProducts();
    return response.status(200).json(result);
  } catch (error) {
    return response.status(500).json({ message: 'Internal server error' });
  }
};

const getProductsById = async (request, response) => {
  try {
    const { id } = request.params;
    if (!id) {
      return response.status(400).json({ message: 'Bad request' });
    }

    const product = await getProducts(id);
    if (!product) {
      return response.status(404).json({ message: 'Product not found' });
    }

    return response.status(200).json(product);
  } catch (error) {
    return response.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getAllProducts,
  getProductsById,
};
