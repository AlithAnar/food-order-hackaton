const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;
var Schema = mongoose.Schema;

ObjectId.prototype.valueOf = function () {
    return this.toString()
};

var voteSchema = new Schema({
    username: String,
    date: Date,
    restaurantId: String,
    checkoutId: String
});

module.exports = mongoose.model('Vote', voteSchema, 'Votes');
