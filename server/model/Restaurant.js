const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;
var Schema = mongoose.Schema;

ObjectId.prototype.valueOf = function () {
    return this.toString()
};

var restaurantSchema = new Schema({
    name: String,
});

module.exports = mongoose.model('Restaurant', restaurantSchema, 'Restaurants');
