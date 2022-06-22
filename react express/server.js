const express = require('express')
const catalog = require('./catalog')
const cors = require('cors')

const server = express()
server.use(cors())
const PORT = 8000

server.get('/catalog', (req, res) => {
    res.json(catalog)  // получаем всё из файла catalog.js в формате json
})

// server.get('/catalog/:id', (req, res) => {
//     const {id} = req.params.id
//     const product = catalog.find(el => el.id == +id)
//     res.json(product)
// })

server.listen(PORT, () => {
    console.log('Server started', PORT) // запуск сервера на порту 8000
})