// mockup-loader.js
const axios = require('axios');

async function loadMockupData() {
    const products = require('./mock-products.json');
    const orders = require('./mock-orders.json');

    try {
        await axios.post('http://localhost:8000/products/load', products);
        await axios.post('http://localhost:9000/orders/load', orders);
        console.log('Mockup data loaded successfully.');
    } catch (error) {
        console.error('Failed to load mockup data:', error.message);
    }
}

loadMockupData();