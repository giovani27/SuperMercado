const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const Produtos = require('./src/Routes/usuario')
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))


mongoose.connect('mongodb://localhost:27017/mercadinho', {useNewUrlParser: true, useUnifiedTopology: true});

app.use('/produtos', Produtos)




app.listen(8000, () => {
    console.log('Servidor ROdando')
})