const express = require('express'); // import express
const app = express(); // création de l'application express
const mongoose = require('mongoose')


// connection à la bdd
mongoose.connect('mongodb+srv://luffy1:projet6oc@cluster0.zytcp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

module.exports = app; // export de l'app 


