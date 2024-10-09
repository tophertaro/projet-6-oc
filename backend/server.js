const app = require('./app');
const http = require('http')

const port = process.env.PORT || 3001; // Définition du port
app.listen(port, () => {
  console.log(`Le serveur tourne sur le port ${port}`);
});