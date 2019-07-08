/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const authMiddleware = require('./middleware/auth');
const errorHandler = require('./middleware/error');
const routes = require('./routes');
const pkg = require('./package.json');


const { port, mongoUrl, secret } = config;
const app = express();

app.set('config', config);
app.set('pkg', pkg);


app.use(express.json());
app.use(authMiddleware(secret));

// Registrar rutas
routes(app, (err) => {
  if (err) {
    throw err;
  }

  // Registro de "middleware" que maneja posibles errores
  app.use(errorHandler);

  app.listen(port, () => console.log(`App listening on port ${port}`));
});

mongoose.connect(mongoUrl, { useNewUrlParser: true, useFindAndModify: false })

  .then(() => console.log('MongoDB connected...'))

  .catch(error => console.log(error));


const orders = require('./routes/orders');

app.use('/orders', orders);


const tables = require('./routes/tables');

app.use('/tables', tables);


const products = require('./routes/products');

app.use('/products', products);
