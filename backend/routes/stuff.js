/**
 * Importation d'express
 * 
 * Utilisation de la methode Router(), d'express. 
 * 
 * Importation du models Thing
 */

const express = require('express');
const router = express.Router();
const Thing = require('../models/Thing');

module.exports = router;

  /**
   * Enregistrer des Thing dans la base de données. 
   */

  router.post('/', (req, res, next) => {
    delete req.body._id;
    const thing = new Thing({
      ...req.body
    });
    thing.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré avec succes !'}))
      .catch(error => res.status(400).json({ error : 'Erreur rencontré lors de l\' enregistrement de l\' objet'}))
  }); 

  /**
   * Récupération d'un thing spécifique'
   */

  router.get('/:id', (req, res, next) => {
    Thing.findOne({ _id: req.params.id })
      .then(thing => res.status(200).json(thing))
      .catch(error => res.status(404).json({ error }));
  });

  /**
   * Récupération de la liste de Things en vente
   */

  router.get('/', (req, res, next) => {
    Thing.find()
      .then(things => res.status(200).json(things))
      .catch(error => res.status(400).json({ error }));
  });

  /**
   * Modification d'un Thing. 
   */

  router.put('/:id', (req, res, next) => {
    Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet modifié !'}))
      .catch(error => res.status(400).json({ error }));
  });

  /**
   * Suppression d'une sauce 
   */
  
   router.delete('/:id', (req, res, next) => {
    Thing.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  });  