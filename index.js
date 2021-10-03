const express = require('express')
const app = express()
const rota = ('./routes/rotas')


app.get('/', (req,res) => {
    res.send('hola mundo')

})
app.use('/test', rota)
app.listen(3000)