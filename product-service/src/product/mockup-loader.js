const axios = require('axios');

async function loadMockupData() {
    try {
        const productsUrl = 'https://raw.githubusercontent.com/pannathatdev/product-service/main/src/mock-products.json';
        const response = await axios.get(productsUrl);
        const products = response.data;

        await axios.post('http://order-service:9000/orders/load', products);
        console.log('Mockup data loaded successfully.');
    } catch (error) {
        console.error('Failed to load mockup data:', error.message);
    }
}

loadMockupData();