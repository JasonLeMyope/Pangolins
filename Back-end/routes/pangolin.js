const express = require('express');
const router = express.Router();

const pangolinCtrl = require('../controllers/pangolin');

router.get('/showInfos/:id', pangolinCtrl.showInfos);
router.put('/editInfos', pangolinCtrl.editInfos);
router.get('/listPangolins', pangolinCtrl.listPangolins);
router.put('/editFriends', pangolinCtrl.editFriends);

module.exports = router;