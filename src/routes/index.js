const express = require('express');
const prooductsRouter = require('./products.router');


function routerApi(app){
  const router = express.Router();
  app.use('/api/v1/',router)
  router.use('/products',prooductsRouter);
}

module.exports = routerApi;
