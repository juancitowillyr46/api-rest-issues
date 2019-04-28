require('dotenv').config();
const config = {
    port: process.env.PORT || 3000,
    mongo: {
        host: process.env.MONGO_HOST,
        port: process.env.MONGO_PORT,
        db: process.env.MONGO_BD
    }
};
module.exports = config;