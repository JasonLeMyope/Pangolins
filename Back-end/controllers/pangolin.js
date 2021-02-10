const User = require("../models/user");
const Pangolin = require("../models/pangolin");
const bcrypt = require('bcrypt');

exports.showInfos = (req, res, next) => {
    console.log("ShowInfos.");
    Pangolin.findOne({ idUser: req.params.id })
        .then(pangolin => res.status(200).json(pangolin))
        .catch(error => res.status(400).json({ error }));
};

exports.editInfos = (req, res, next) => {
    console.log("EditInfos.");
    Pangolin.updateOne({ idUser: req.body.userId }, {
        nom: req.body.nom,
        age: Number(req.body.age),
        famille: req.body.famille,
        race: req.body.race,
        nourriture: req.body.nourriture
    })
    .then(() => res.status(200).json({ message: 'Pangolin modifié !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.listPangolins = (req, res, next) => {
    console.log("ListPangolins.");
    Pangolin.find()
        .then(pangolins => res.status(200).json(pangolins))
        .catch(error => res.status(400).json({error}));
};

exports.editFriends = (req, res, next) => {
    console.log("editFriendsPangolin.");
    Pangolin.updateOne({ idUser: req.body.userId }, {
        amis: req.body.tabFriends
    })
    .then(() => res.status(200).json({ message: 'Liste d amis modifiée !'}))
    .catch(error => res.status(400).json({ error }));
};