const axios = require('axios');

async function loadMockupData() {
    try {
        const productsUrl = 'https://raw.githubusercontent.com/pannathatdev/product-service/main/product-service/src/product/mock-products.json';
        const response = await axios.get(productsUrl);
        const products = response.data;

        await axios.post('http://product-service:8000/orders/load', products); // เปลี่ยนจาก order-service เป็น product-service
        console.log('Mockup data loaded successfully.');
    } catch (error) {
        console.error('Failed to load mockup data:', error.message);
    }
}

loadMockupData();