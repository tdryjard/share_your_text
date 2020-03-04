const express = require('express')
const Texte = require('../controllers/texte.controller')
const router = express.Router();

router.post('/post', Texte.createText);

module.exports = router