const express = require('express')
const routerApi = require('./routes');

const app = express()

const PORT = 3000

app.get('/', (req, res) => {
    res.send('Primer servidor')
})

routerApi(app)

app.listen(PORT, () => {
  console.log(`open http://localhost:${PORT}`)
})
