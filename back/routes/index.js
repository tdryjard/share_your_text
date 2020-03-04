const express = require('express');
const texte = require('./texte.route')
const router = express.Router();


router.use('/texte', texte)
module.exports = router;