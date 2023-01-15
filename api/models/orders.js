const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    client: String,
    skinType: String,
    skinCondition: String,
    products:  [{type: Schema.Types.ObjectId, ref: 'product'}],
    Price: Number,
    Advance: Number,
    Bal: Number,
    Destination: String,
    Due: Date,
    comment: String,
    state: String,
    ref: String,
}, {timestamps: true})

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;