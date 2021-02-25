const express = require('express')

const router = express.Router()
const Produtos = require('../Model/produtos')


router.get('/', async (req, res) => {
    try {

        const produ = await Produtos.find({})
        res.json({error: false, prod: produ })

    } catch (err) {
        res.json({error: true, message: err.message })
    }
})

router.post('/', async (req, res) => {
    try {
        const prod = req.body;
        const response = await new Produtos(prod).save()
          res.json({error: false, prod: response })
    } catch (err) {
        res.json({error: true, message: err.message })

    }
})

router.put('/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const novo_produto = req.body;

      const produto = await Produtos.findByIdAndUpdate(id, novo_produto);
      res.json({ error: false, produto });
    } catch (err) {
      res.json({ error: true, message: err.mensagem });
    }
  });

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await Produtos.findByIdAndDelete(id);
        res.json({ error: false });
    } catch (err) {
      res.json({ error: true, message: err.message });
    }
  });

module.exports =  router;