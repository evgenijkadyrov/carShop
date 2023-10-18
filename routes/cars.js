const express = require('express')
const router = express.Router()
const path = require('path')
const {getCars, createCar, getSingleCar} = require('../controllers/cars')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: './assets/',
    filename: (req, file, cb) => {
        cb(null, req.body.name + '-' + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({storage})

router.get('/', getCars)

router.get('/:id', getSingleCar)
router.post('/', upload.single('image'), createCar)

module.exports = router