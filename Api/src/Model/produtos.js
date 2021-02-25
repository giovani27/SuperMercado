const mongoose = require('mongoose')

const Produtos = mongoose.model('Produtos', {
    nome: String,
    categoria: String,
    preco: Number,
    url: String,
    oferta: Boolean,
    
});

module.exports = Produtos;