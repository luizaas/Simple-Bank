const express = require('express');
const router = express.Router();

const client = require('../controllers/client.controller');
const transaction = require('../controllers/transaction.controller');

router.get('/cadastro', (req, res)=>{
    res.render("register")
});

router.post('/finalizacadastro', client.clientCreate);

router.get('/listasaldo',client.showAllBalance);

router.get('/transacoesdia/:date',transaction.showAllTransactionFromDate );

router.get('/extrato/:client', transaction.showAllTransactionFromClient);

module.exports = router;