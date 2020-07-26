const express = require('express');
const mongoose = require('mongoose');

const productRouter = require('./routes/product');

const mongoDB = process.env.MONGODB_URI;

mongoose.connect(mongoDB);

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/product', productRouter);

db.once('open', function() {
    console.log('Connected!');
    app.listen(port, () => {
        console.log('Server is up and running on port numner ' + port);
    });
});
