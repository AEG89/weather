import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

    return <div>
        <h1>Click on the District to know Weather Information</h1>
      
       <ul className='home-links'>
      <li><Link to='/singleweather/Galle'>Galle</Link></li>
      <li><Link to={'/singleweather/Matara'}>Matara</Link></li>
      <li><Link to='/singleweather/Colombo'>Colombo</Link></li>
      <li><Link to={'/singleweather/Kandy'}>Kandy</Link></li>
      <li><Link to='/singleweather/Hambantota'>Hambantota</Link></li>
      <li><Link to='/singleweather/Gampaha'>Gampaha</Link></li>
      <li><Link to='/singleweather/Trincomalee'>Trincomalee</Link></li>
      <li><Link to='/singleweather/Jaffna'>Jaffna</Link></li>
      <li><Link to='/singleweather/Anuradhapura'>Anuradhapura</Link></li>
      <li><Link to='/singleweather/batticaloa'>Batticaloa</Link></li>
      <li><Link to='/singleweather/Badulla'>Badulla</Link></li>
      <li><Link to='/singleweather/Polonnaruwa'>Polonnaruwa</Link></li>
      <li><Link to='/singleweather/Monaragala'>Monaragala</Link></li>
      <li><Link to='/singleweather/Kegalle'>Kegalle</Link></li>
      <li><Link to='/singleweather/Kalutara'>Kaluthara</Link></li>
      <li><Link to='/singleweather/Nuwara Eliya'>Nuwara Eliya</Link></li>
      <li><Link to='/singleweather/Kurunegala'>Kurunagala</Link></li>
      <li><Link to='/singleweather/Haputale'>Haputale</Link></li>
      <li><Link to='/singleweather/Matale'>Matale</Link></li>
      
    </ul>
    </div>
    
      
}

export default Home