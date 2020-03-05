const express = require('express')
const Texte = require('../controllers/texte.controller')
const router = express.Router();

router.post('/post', Texte.createText);

router.get('/all', Texte.findText);

router.get('/collab', Texte.findTextCollab);

router.put('/update/:textId', Texte.updateText)

module.exports = router