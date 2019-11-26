var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
    },
    arrival: {
        type: Date,
    }
});

var flightSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
        default: 'SAN'
    },
    destination: [destinationSchema],
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        min: '1987-10-19',
        default: function () {
            var date = new Date
            date.toLocaleDateString(date.getFullYear() + 1);
            return date
        }
    }
});

module.exports = mongoose.model('Flight', flightSchema);