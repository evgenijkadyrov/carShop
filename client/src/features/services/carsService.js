import axios from 'axios'

 const getCars= async ()=>{
    const cars = await axios.get('http://localhost:8000/api/cars')
    return cars.data
}

export const  carsService={
    getCars
}