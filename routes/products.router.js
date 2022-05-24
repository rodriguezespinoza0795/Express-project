const express = require('express')

const router = express.Router();

const products = [
  {
    id:1,
    name:'producto1',
    price:1000
  },
  {
    id:2,
    name:'producto2',
    prices:2000
  }
]

router.get('/', async (req, res) => {
  res.send(products)
});

router.get('/:id', async (req, res) => {
  const {id} = req.params;
  res.send(products.find((item) => item.id === parseInt(id,10)))
});

module.exports = router;
