const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Jamy:Gourmaud@cluster0.gkmgi.mongodb.net/republiquepangolin?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

const userRoutes = require('./routes/user');
const pangolinRoutes = require('./routes/pangolin');

app.use('/api/auth', userRoutes);
app.use('/api/pangolin', pangolinRoutes);

module.exports = app;