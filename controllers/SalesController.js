const { getSales } = require('../services/SalesService');

const getAllSales = async (_request, response) => {
  try {
    const result = await getSales();
    return response.status(200).json(result);
  } catch (error) {
    return response.status(500).json({ message: 'Internal server error' });
  }
};

const getSalesById = async (request, response) => {
  try {
    const { id } = request.params;
    if (!id) {
      return response.status(400).json({ message: 'Bad request' });
    }

    const result = await getSales(id);
    if (!result) {
      return response.status(404).json({ "message": "Sale not found" });
    }

    return response.status(200).json(result);
  } catch (error) {
    return response.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getAllSales,
  getSalesById,
};
