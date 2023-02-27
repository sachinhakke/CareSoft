import { BrowserRouter,Routes,Route } from "react-router-dom"
import HomePage from "./HomePage/HomePage"
import Doctor from "./Doctor"

const App=()=>{
    return <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/doctor" element={<Doctor/>}/>
    </Routes>
    </BrowserRouter>
}
export default App