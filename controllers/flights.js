
var Flight = require('../models/flight');
var Ticket = require('../models/ticket');

module.exports = {
    index,
    new: newFlight,
    create,
    submit,
    show,
   
}


// flights/:id/new/tickets


function index(req, res) {
    Flight.find({}, function (err, flights) {
        res.render('flights/index', {
            flights
        })


    }).sort({ departs: 1 });
}


function newFlight(req, res) {

    res.render('flights/new');
}

function create(req, res) {
    var flight = new Flight(req.body);
    flight.save(function (err) {
        console.log(err)
        if (err) return res.render('flights/new');
        res.redirect(`/flights/${flight._id}`)
    });
}

function submit(req, res) {
    console.log("SUBMIT FIRED")
    res.redirect('/flights/new')
};

function show(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        Ticket.find({flight: flight._id}, function (err, tickets) {
            res.render('flights/show', { flight, tickets })

        })
    });

}

