const http = require('http');
const port = 3000;

const requestHandler = (request, response) => {
    if (request.url ==='/contact'){
        response.end('Nous ne sommes pas joignables pour le moment !');
    }
    const name = request.url.split('/')[2]
    if (request.url === `/display/${name}`){
        response.end(`Vous tentez d'afficher le profil de ${name}`)
    }
    console.log(request.url);
    response.end('Bienvenue sur votre serveur !!');
  }

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
      throw new Error('Something bad happened...');
    }
  
    console.log(`server is listening on ${port}`);
  });