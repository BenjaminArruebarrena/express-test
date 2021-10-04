const express = require('express')
const app = express()
const rota = require('./routes/rotas')
const swaggerUi = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc') 
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
app.use('/api-docs', swaggerUi.serve,swaggerUi.setup(swaggerDocs))
/**
 * @swagger
 * /clientes:
 *  get:
 *   description: usado para obter todos os clientes
 *   responses: 
 *      '200': 
 *        description: Com suceso!! 
 */

app.get('/clientes', (req,res) => {
    res.send('pagina de clientes')
})

/**
 * @swagger
 * /clientes:
 *  put:
 *   description: usado para atualizar os clientes
 *   responses: 
 *      '201': 
 *        description: Com suceso!! 
 */

app.put('/clientes', (req,res) => {
    res.status(201).send('consegui atualizar os clientes')
})


app.use('/test', rota)
app.get('/', (req,res) => {
    res.send('hola mundo')

})

app.listen(3000)