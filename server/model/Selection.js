const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;
var Schema = mongoose.Schema;

ObjectId.prototype.valueOf = function () {
    return this.toString()
};

var selectionSchema = new Schema({
    restaurantIds: [{
        type: String
    }],
    checkoutId: String,
});

module.exports = mongoose.model('Selection', selectionSchema, 'Selections');
