const connection = require('../db/connection');

const getAll = async () => {
  const [result] = await connection.query(`
    SELECT * FROM
      StoreManager.products
  `);
  return result;
};

const getById = async (id) => {
  const [[result]] = await connection.query(`
    SELECT * FROM
      StoreManager.products
    WHERE
      id = ?
  `, [id]);

  return result;
};

const createProduct = async (name) => {
  const [result] = await connection.query(`
    INSERT INTO
      StoreManager.products
      (name)
    VALUES
      (?)
  `, [name]);

  return {
    id: result.insertId,
    name,
  };
};

const editProduct = async (id, name) => {
  const [update] = await connection.query(`
    UPDATE
      StoreManager.products
    SET
      name = ?
    WHERE
      id = ?
  `, [name, id]);

  return update.affectedRows;
};

const deleteProduct = async (id) => {
  await connection.query(`
    DELETE FROM
      StoreManager.products
    WHERE
      id = ?
  `, [id]);
};

module.exports = {
  getAll,
  getById,
  createProduct,
  editProduct,
  deleteProduct,
};