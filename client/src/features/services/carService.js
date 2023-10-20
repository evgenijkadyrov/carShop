import axios from 'axios'

 const getCar= async (id)=>{
    const car = await axios.get(`http://localhost:8000/api/cars/${id}`)
    return car.data
}
const createCar= async (carData)=>{
    const car = await axios.post(`http://localhost:8000/api/cars/`,carData)
    return car.data
}
export const  carService={
    getCar,
    createCar
}