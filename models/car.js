const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    capacity: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Car', carSchema)