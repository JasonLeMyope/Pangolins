const User = require("../models/user");
const Pangolin = require("../models/pangolin");
const bcrypt = require('bcrypt');

exports.signup = (req, res, next) => {
    console.log("SignUp.");
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        login: req.body.login,
        password: hash
      });
      user.save()
        .then(() => res.status(201).json(user))
        .catch(error => res.status(400).json({ error }));
      const pangolin = new Pangolin({
        idUser: user._id,
        nom: req.body.nom,
        age: Number(req.body.age),
        famille: req.body.famille,
        race: req.body.race,
        nourriture: req.body.nourriture
      });
      pangolin.save();
    })
    .catch(error => res.status(500).json({ error }));
    
};

exports.login = (req, res, next) => {
  console.log('Login');
  User.findOne({ login: req.body.login })
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          res.status(200).json({
            userId: user._id
          });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};