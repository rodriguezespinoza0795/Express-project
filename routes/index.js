const express = require('express')

const productsRouter = require('./products.router')

const routerApi = (app) => {
  const router = express.Router()
  app.use('/', router)
  router.use('/products', productsRouter)
}

module.exports = routerApi
