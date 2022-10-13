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

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');



router.get('/', auth, stuffCtrl.getAllStuff);
router.post('/', auth, multer, stuffCtrl.createThing);
router.get('/:id', auth, stuffCtrl.getOneThing);
router.put('/:id', auth, multer, stuffCtrl.modifyThing);
router.delete('/:id', auth, stuffCtrl.deleteThing);
  
// Exportation de la methode de routing. 
module.exports = router;