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
  },
  {
    id:3,
    name:'producto3',
    price:1000
  },
  {
    id:4,
    name:'producto4',
    prices:2000
  }
]

router.get('/', async (req, res) => {
  const { offset, limit } = req.query
  offset && limit
    ? res.send(products.slice(offset, offset == 0 ? limit : offset*limit+1 ))
    : res.send({
      "status": "error",
      "message": "limit and offset are mandatory"
    })
});

router.get('/:id', async (req, res) => {
  const {id} = req.params;
  res.send(products.find((item) => item.id === parseInt(id,10)))
});

router.post('/', (req, res) => {
  const body = req.body;
  const id = products.length+1
  products.push({ ...body,  "id":id })
  res.send(products.find((item) => item.id === id,10))
})

module.exports = router;
