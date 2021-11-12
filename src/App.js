import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

//import pages
import Home from './Pages/Home'
import About from './Pages/About'

import SingleWeather from './Pages/SingleWeather'

//import Componants
import Navbar from './Componants/Navbar'


function App() {
  return (
    <Router>
     
     <Navbar />
     <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
     
      <Route path='/singleweather/:id' element={<SingleWeather/>} />

     </Routes>
    </Router>
  );
}

export default App;
