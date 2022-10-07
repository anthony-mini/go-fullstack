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

// Récupération du corps JSON, venant d'une requête de l'application front-end. (Donne accès au 'body' de chaque requêtes)
app.use(express.json());

/**
 * Création d'un header :
 * #. Débloque les erreus CORS
 * #. Autorise l'acces à notre API
 */

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Acces à l'API selon n'importe quel origine ('*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); // ajout des headers mentionnés aux requêtes envoyées vers notre API
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); // envoie des requêtes avec les méthodes mentionnées ( GET ,POST , etc.)
    next();
  });

app.post('/api/stuff', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
      message: 'Objet créé !'
    });
  });  

app.get('/api/stuff', (req, res, next) => {
    const stuff = [
      {
        _id: 'oeihfzeoi',
        title: 'Mon premier objet',
        description: 'Les infos de mon premier objet',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        price: 4900,
        userId: 'qsomihvqios',
      },
      {
        _id: 'oeihfzeomoihi',
        title: 'Mon deuxième objet',
        description: 'Les infos de mon deuxième objet',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        price: 2900,
        userId: 'qsomihvqios',
      },
    ];
    res.status(200).json(stuff);
  });

module.exports = app;