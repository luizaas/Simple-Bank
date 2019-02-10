const express = require('express');
const router = express.Router();

const client_controller = require('../controllers/client.controller');

router.get('/', (req, res)=>{
    res.render("register")
});

router.post('/finalizacadastro', client_controller.client_create);

module.exports = router;