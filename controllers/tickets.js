var Ticket = require('../models/ticket');
var Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create,
  
}


function newTicket(req, res, id) {
    res.render('tickets/new', {
        flightID: req.params.id
    });
};



function create(req, res) {
    Ticket.create({seat: req.body.seat, price: req.body.price, flight: req.params.id}, function(err, ticket) {
        console.log("TICKET", ticket);
        ticket
        res.redirect(`/flights/${req.params.id}`)
    });
}
