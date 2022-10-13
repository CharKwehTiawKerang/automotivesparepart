//======================== ANOTHER WAY ========================//
// const jsonServer = require('json-server')
// const server = jsonServer.create()
// const router = jsonServer.router('db.json')
// const middlewares = jsonServer.defaults()
// const PORT = process.env.PORT || 8000

// server.use(middlewares)
// server.use(router)

// server.listen(PORT)

const PORT = process.env.PORT || 8000
const express = require('express')

const app = express()

const products = require('./data').products
const car = require('./car-database').car

app.get('/', (req, res) => {
    res.json('Automotive Spare Parts API')
})

app.get('/products', (req, res) => {
    res.json(car)
})

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))