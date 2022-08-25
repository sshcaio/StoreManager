const sinon = require('sinon');
const { expect } = require('chai');
const ProductsService = require('../../../services/ProductsService');
const controllers = require('../../../controllers');

const mockDatabase = [
  {
    "id": 1,
    "name": "Martelo de Thor"
  },
  {
    "id": 2,
    "name": "Traje de encolhimento"
  },
  {
    "id": 3,
    "name": "Escudo do Capitão América"
  },
];

describe('GET Products', () => {
  describe('getAllProducts', () => {
    describe('with no params', () => {
      const request = {};
      const response = {};

      beforeEach(async () => {
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();

        sinon.stub(ProductsService, 'getProducts').resolves(mockDatabase);
      });

      afterEach(async () => {
        ProductsService.getProducts.restore();
      });

      it('should return a 200 OK status', async () => {
        await controllers.getAllProducts(request, response);
        expect(response.status.calledWith(200)).to.be.equal(true);
      });

      it('should return an array with the products', async () => {
        await controllers.getAllProducts(request, response);
        expect(response.json.calledWith(mockDatabase)).to.be.equal(true);
      });
    })
  })
})