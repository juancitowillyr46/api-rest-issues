 const mongoose = require('mongoose');
 const config = require('./config');
 mongoose.Promise = global.Promise;
 // ${config.mongo.host}:${config.mongo.port}/${config.mongo.db}
 mongoose.connect(`mongodb+srv://admin:1CKolbExQc9MQBJktuAN_@cluster0-xiqw7.mongodb.net/test?retryWrites=true`, { useNewUrlParser: true }).then(
     () => {
         console.log("Database is connected");
     },
     err => {
         console.log("Can not connect to the database'+ err");
         throw new Error(`unable to connect to database: ${config.mongo.host}`);
     }
 ).catch((error) => {
     throw new Error(`Promise error`);
 });

 const connection = mongoose.connection;
 connection.once('open', () => {
     console.log('MongoDB database connection established successfully!');
 });