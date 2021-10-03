const express = require('express')
const rota = express.Router()

rota.get('/', (req,res) => {
    res.send('dentro da subrota')
})

module.exports = rota