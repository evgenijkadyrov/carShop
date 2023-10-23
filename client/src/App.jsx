import './App.css'
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/home/home.jsx";
import { paths} from "./paths.js";
import {Car} from "./pages/car/car";
import {CarCreate} from "./pages/carCreate/carCreate.jsx";
import {Order} from "./pages/order/index.js";

function App() {

    return (
        <Routes>
            <Route path={paths.home} element={<Home/>}/>
            <Route path={`${paths.car}/:id`} element={<Car/>}/>
            <Route path={paths.createCar} element={<CarCreate/>}/>
            <Route path={paths.order} element={<Order/>}/>

        </Routes>

    )
}

export default App
