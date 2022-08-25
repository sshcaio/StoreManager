const { getAll, getById } = require('../models/SalesModel');

const getSales = async (id = null) => {
  if (!id) {
    const result = await getAll();
    if (!result) return null;
    return result;
  }
  const result = await getById(id);
  if (!result) return null;
  return result;
};

module.exports = {
  getSales,
};