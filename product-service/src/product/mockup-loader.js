const axios = require('axios');

async function loadMockupData() {
    try {
        const orderServiceUrl = 'http://order-service:9000/orders/load';
        const response = await axios.get(orderServiceUrl);
        const products = response.data;

        await axios.post('http://order-service:9000/orders/load', products);
        console.log('Mockup data loaded successfully.');
    } catch (error) {
        console.error('Failed to load mockup data:', error.message);
    }
}

loadMockupData();