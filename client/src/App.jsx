import './App.css'
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/home/home.jsx";
import { paths} from "./paths.js";

function App() {

    return (
        <Routes>
            <Route path={paths.home} element={<Home/>}/>

        </Routes>

    )
}

export default App
