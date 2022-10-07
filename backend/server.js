/**
* Fonction d'écoute de requete http et renvoie d'une réponse à l'écoute du port 3000 ou autres.
*
* @param Circle
* @return void
*/

const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Voilà la réponse n°2 du serveur !');
});

server.listen(process.env.PORT || 3000);