/**
* Importation d'express avec la commande `require`
*
* Constante *app* qui fera appel à la méthode `express()`qui permet l'appel de l'application express.
*
* Méthode `use`. Pour que le serveur Node retourne une réponse en fonction de l'application Express. --> Envoie d'une réponse en Json avec l'objet `message`.
*
* Exportation de cette constante pour pouvoir y accéder dans d'autres fichiers
*/

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('Requête reçue !');
    next();
  });
  
  app.use((req, res, next) => {
    res.status(201);
    next();
  });
  
  app.use((req, res, next) => {
    res.json({ message: 'Votre requête a bien été reçue !' });
    next();
  });
  
  app.use((req, res, next) => {
    console.log('Réponse envoyée avec succès !');
  });

module.exports = app;