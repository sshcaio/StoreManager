const connection = require('../db/connection');

const getAll = async () => { 
  const [result] = await connection.execute(`
    SELECT 
      sale.id AS saleId,
      sale_product.product_id AS productId,
      sale_product.quantity,
      sale.date
    FROM
      StoreManager.sales
      AS sale
    INNER JOIN
      StoreManager.sales_products
      AS sale_product
    ON
      sale.id = sale_product.sale_id
    ORDER BY
      sale_id ASC, product_id ASC
  `);
  return result;
};

const getById = async (id) => {
  const [result] = await connection.execute(`
    SELECT
      sale_product.product_id as productId,
      sale_product.quantity,
      sale.date
    FROM
      StoreManager.sales AS sale
    INNER JOIN
      StoreManager.sales_products AS sale_product
    ON
      sale.id = sale_product.sale_id
    WHERE
      sale.id = ?
  `, [id]);
  return result;
};

module.exports = {
  getAll,
  getById,
};