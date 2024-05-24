const express = require('express');
const app = express();
const port = 8000;

// เส้นทางสำหรับรับคำขอ GET และส่งข้อมูลสินค้ากลับไปยัง order-service
app.get('/products', (req, res) => {
    // ส่งข้อมูลสินค้ากลับไปยัง order-service
    const products = [
        { id: 1, name: 'Product A' },
        { id: 2, name: 'Product B' },
        { id: 3, name: 'Product C' }
    ];
    res.json(products);
});

app.listen(port, () => {
    console.log(`Product service is listening at http://localhost:${port}`);
});