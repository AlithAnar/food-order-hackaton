const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;
var Schema = mongoose.Schema;

ObjectId.prototype.valueOf = function () {
    return this.toString()
};

var checkoutSchema = new Schema({
    restaurantId: {type: String, required: false},
    date: Date,
    status: String,
});

module.exports = mongoose.model('Checkout', checkoutSchema, 'Checkouts');
