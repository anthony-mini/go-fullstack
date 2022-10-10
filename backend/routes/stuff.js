/**
 * Importation d'express
 * 
 * Utilisation de la methode Router(), d'express. 
 * 
 * Importation du controller stuff
 */

const express = require('express');
const router = express.Router();

const stuffCtrl = require('../controllers/stuff');

router.get('/', stuffCtrl.getAllStuff);
router.post('/', stuffCtrl.createThing);
router.get('/:id', stuffCtrl.getOneThing);
router.put('/:id', stuffCtrl.modifyThing);
router.delete('/:id', stuffCtrl.deleteThing);
  
// Exportation de la methode de routing. 
module.exports = router;