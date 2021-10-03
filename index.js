const express = require('express')
const app = express()
const rota = require('./routes/rotas')
const swaggerUi = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-js-doc') 
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title:'teste api',
            description: 'informacao da api',
            contact: {
                name:'Benjamin',
            },
            servers: ['http://localhost:3000']            
        }
    },
    apis:['index.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions)

app.get('/', (req,res) => {
    res.send('hola mundo')

})
app.use('/test', rota)
app.listen(3000)