const { getProducts, postProduct,
  putProduct, deleteProductService } = require('../services/ProductsService');

const SERVER_ERROR = 500;
const SERVER_ERROR_MESSAGE = { message: 'Internal server error' };

const getAllProducts = async (_request, response) => {
  try {
    const result = await getProducts();
    return response.status(200).json(result);
  } catch (error) {
    return response.status(SERVER_ERROR).json(SERVER_ERROR_MESSAGE);
  }
};

const getProductsById = async (request, response) => {
  try {
    const { id } = request.params;
    if (!id) {
      return response.status(400).json({ message: 'Bad request' });
    }

    const result = await getProducts(id);
    if (!result) {
      return response.status(404).json({ message: 'Product not found' });
    }

    return response.status(200).json(result);
  } catch (error) {
    return response.status(SERVER_ERROR).json(SERVER_ERROR_MESSAGE);
  }
};

const postNewProduct = async (request, response) => {
  try {
    const { name } = request.body;
    
    const result = await postProduct(name);
    
    return response.status(201).json(result);
  } catch (error) {
    return response.status(SERVER_ERROR).json(SERVER_ERROR_MESSAGE);
  }
};

const updateProduct = async (request, response) => {
  try {
    const { name } = request.body;
    const { id } = request.params;
    if (!id) {
      return response.status(400).json({ message: 'Bad request' });
    }
    
    const update = await putProduct(id, name);
    if (!update) {
      return response.status(404).json({ message: 'Product not found' });
    }

    const result = await getProducts(id);
    return response.status(200).json(result);
  } catch (error) {
    return response.status(SERVER_ERROR).json(SERVER_ERROR_MESSAGE);
  }
};

const deleteProductById = async (request, response) => {
  try {
    const { id } = request.params;
    if (!id) {
      return response.status(400).json({ message: 'Bad request' });
    }

    const findProduct = await getProducts(id);
    if (!findProduct) {
      return response.status(404).json({ message: 'Product not found' });
    }

    await deleteProductService(id);

    return response.status(204).end();
  } catch (error) {
    return response.status(SERVER_ERROR).json(SERVER_ERROR_MESSAGE);
  }
};

module.exports = {
  getAllProducts,
  getProductsById,
  postNewProduct,
  updateProduct,
  deleteProductById,
};
