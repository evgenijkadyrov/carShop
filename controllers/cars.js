const Car = require('../models/car')

const getCars = async (req, res) => {
    try {
        const cars = await Car.find()
        res.status(200).json(cars)
    } catch (err) {
        res.status(500).json({message: "Failed to receive cars"})
    }
}
const createCar = async (req, res) => {
    const error = {}
    if (!req.body.name) {
        error.name = {message: 'Enter car name, please.'}
    }
    if (!req.body.price) {
        error.price = {message: 'Enter car price, please.'}
    }
    if (!req.body.description) {
        error.description = {message: 'Enter car description, please.'}
    }
    if (!req.body.capacity) {
        error.capacity = {message: 'Enter car capacity, please.'}
    }
    if (!req.file) {
        error.image = {message: 'Choose car image, please.'}
    }
    if (Object.keys(error).length > 0)
        return res.status(400).json(error)


    const {
        name, description, capacity, price
    } = req.body
    try {
        const car = await Car.create({
            name, description, capacity, price,
            image: `http://127.0.0.1:${process.env.PORT}/static/${req.file.filename}`
        })
        res.status(200).json(car)
    } catch (err) {
        res.status(500).json({message: "Failed to create cars"})
    }
}
const getSingleCar = async (req, res) => {
    try {
        const car = await Car.findOne({
            _id: req.params.id
        })
        res.status(200).json(car)
    } catch (error) {
        res.send(400).json({message: 'Failed to receive car'})
    }
}
module.exports = {getCars, createCar, getSingleCar}