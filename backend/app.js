/**
* Importation d'express avec la commande `` require ``
* Importation de moongose avec la methode `` require ``
* Importation du models Thing. 
* Constante *app* qui fera appel à la méthode `express()`qui permet l'appel de l'application express.
*
**Méthode `use`. Pour que le serveur Node retourne une réponse en fonction de l'application Express. --> Envoie d'une réponse en Json avec l'objet `message`.
*/

const express = require('express');
const mongoose = require('mongoose');
const Thing = require('./models/Thing');

/**
 * ** Connexion à la base de données MongoDB via Mongoose **
 * 
 */

 mongoose.connect('mongodb+srv://admin-gofullstack:6sZ5ub7Nrp0c7zpD@cluster0.5w0hq4z.mongodb.net/?retryWrites=true&w=majority',
 { useNewUrlParser: true,
   useUnifiedTopology: true })
 .then(() => console.log('Connexion à MongoDB réussie !'))
 .catch(() => console.log('Connexion à MongoDB échouée !'));

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

  /**
   * Enregistrer des Thing dans la base de données. 
   */

  app.post('/api/stuff', (req, res, next) => {
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

  app.get('/api/stuff/:id', (req, res, next) => {
    Thing.findOne({ _id: req.params.id })
      .then(thing => res.status(200).json(thing))
      .catch(error => res.status(404).json({ error }));
  });

  /**
   * Récupération de la liste de Things en vente
   */

  app.get('/api/stuff', (req, res, next) => {
    Thing.find()
      .then(things => res.status(200).json(things))
      .catch(error => res.status(400).json({ error }));
  });

  /**
   * Modification d'un Thing. 
   */

  app.put('/api/stuff/:id', (req, res, next) => {
    Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet modifié !'}))
      .catch(error => res.status(400).json({ error }));
  });

  /**
   * Suppression d'une sauce 
   */
  
   app.delete('/api/stuff/:id', (req, res, next) => {
    Thing.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  });  


  // Exportation de la constante `` app `` pour pouvoir y accéder dans d'autres fichiers
module.exports = app;