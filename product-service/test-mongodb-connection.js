const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://pipo:Aa123654@pipo.gqdqli4.mongodb.net/product';

async function testMongoDBConnection() {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB Atlas successfully.');
    } catch (error) {
        console.error('Failed to connect to MongoDB Atlas:', error);
    } finally {
        mongoose.disconnect();
    }
}

testMongoDBConnection();