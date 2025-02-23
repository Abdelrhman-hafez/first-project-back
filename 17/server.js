require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');
const buyRoutes = require('./routes/buy');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const shopingRoutes = require('./routes/shoping-cart');
const swaggerDocs = require("./config/swagger");
const { connDB } = require('./config/connDB');

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/shoping-cart', shopingRoutes);
app.use('/buy', buyRoutes);

connDB()
  .then(() => {
    console.log('MongoDB connected...');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}...`);
      swaggerDocs(app); // تأكد أن Swagger يتم تحميله بعد تشغيل السيرفر
    });
  })
  .catch((error) => {
    console.error('DB Connection Error:', error);
  });

mongoose.connection.on('error', (error) => {
  console.error('MongoDB Error:', error);
});
