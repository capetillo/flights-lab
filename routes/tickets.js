var express = require('express');
var router = express.Router();
var ticketsCtrl = require('../controllers/tickets');

router.get('/flights/:id/tickets/new', ticketsCtrl.new); //show view for making new ticket
router.post('/flights/:id', ticketsCtrl.create);


module.exports = router;