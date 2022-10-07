// importation de mongoose
const mongoose = require('mongoose');

/**
 * ** Création du schéma de données **
 * 
 * Utilisation de la fonction ``Schema`` fourni par Mongoose.
 * 
 * Déclaration d'un objet dans la constante *thingSchema*, qui comporte les différents champs :
 * #. Une clée, contenant le nom des objets
 * #. Son type (string, number, etc...)
 * #. Et prend le parametre required: true, pour rendre obligatoire chaque champ. 
 */

const thingSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  userId: { type: String, required: true },
  price: { type: Number, required: true },
});

// Exportaion de ce model de données avec la : Methode ``model`` avec en argument le type du model et la constante thingSchema.
// Exportation du schéma en tant que modèle mongoose et disponible pour l'app
module.exports = mongoose.model('Thing', thingSchema);