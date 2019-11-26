var Flight = require('../models/flight');

module.exports = {
    // show, 
    create
};

// function show(req, res) {
//     res.render('/flights/show')
// }

function create (req, res) {
        Flight.findById(req.params.id, function(err, flight) {
            console.log(req.body.destination)
            let thing = {airport: req.body.destination[0], arrival: req.body.destination[1]}
            console.log(thing)
            flight.destination.push(thing);
            flight.save(function (err) {
            res.redirect(`/flights/${flight._id}`);
        });
    });
}

// Flight.findById(req.params.id, function(err, flight) {
//     flight.destinations.push(req.body);
//     flight.save(function (err) {
//   res.redirect(`/flights/${flight._id}`)
//     }

