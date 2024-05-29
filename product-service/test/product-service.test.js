const request = require('supertest');
const app = require('../src/app');

describe('Product Service', () => {
    it('should return product list', async() => {
        const res = await request(app).get('/products');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveLength(2);
        expect(res.body[0]).toHaveProperty('id', '1');
        expect(res.body[0]).toHaveProperty('name', 'Product A');
    });
});