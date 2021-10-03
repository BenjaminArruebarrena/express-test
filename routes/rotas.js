const express = require('express')
const rota = express.Router()


rota.get('/novo', (req,res) => {
    res.send('dentro da subrota novo')
})

rota.get('/', (req,res) =>{
    res.send('dentro da subrota test')
})
module.exports = rota