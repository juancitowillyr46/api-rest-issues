 const mongoose = require('mongoose');
 const config = require('./config');
 mongoose.Promise = global.Promise;
 // ${config.mongo.host}:${config.mongo.port}/${config.mongo.db}
 mongoose.connect(`mongodb://admin:1CKolbExQc9MQBJktuAN@@cluster0-shard-00-00-xiqw7.mongodb.net:27017/test`, { useNewUrlParser: true }).then(
     () => {
         console.log("Database is connected");
     },
     err => {
         console.log("Can not connect to the database'+ err");
         throw new Error(`unable to connect to database: ${config.mongo.host}`);
     }
 );

 const connection = mongoose.connection;
 connection.once('open', () => {
     console.log('MongoDB database connection established successfully!');
 });