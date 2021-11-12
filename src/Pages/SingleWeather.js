import React, {useCallback} from "react";
import { Link } from "react-router-dom";
import { useParams } from 'react-router'
import { useGlobalContext } from "../context";
import Loading from "./Loading";
import Home from './Home'

const key = '612b3623df4628e038b90c811fb647bb'
const apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q='
const url2 = '&units=metric&appid='



const SingleWeather = () => {
    const{id} = useParams()
    const {loading,setWeather,setLoading,weather} = useGlobalContext()
    
    const fetchWeather = useCallback (async () => {
         
      setLoading(true);
      async function getWeather(){
        try{
          const response = await fetch((apiUrl)+(id)+(url2)+(key))
          const data = await response.json()
          console.log(data)
          
          if(data){
              const {feels_like:Feeling, 
                          grnd_level:GroundLevel, 
                          humidity:Humidity,
                          pressure:Pressure,
                          sea_level:SeaLevel,
                          temp:Temperature,
                          
                          
                        } = data.main
              const{
                          main:basic,
                          description:situation,
                        } = data.weather[0]

              var lastUpdated = new Date(data.dt*1000).toString().substring(0,25)
              
              const {
                sunrise:sunRise,
                sunset:sunSet,
              } = data.sys
              var sunRisetime = new Date(sunRise*1000).toString().substring(0,25)
              const sunSettime = new Date(sunSet*1000).toString().substring(0,25)
              const district = data.name

                        const newWeather1 = {district,
                          lastUpdated, sunRisetime,sunSettime, basic,situation,Feeling,GroundLevel,Humidity,Pressure,SeaLevel,Temperature,
                        }

                        setWeather(newWeather1)
                        
                      
                        
                        if(!newWeather1){
                          console.log('Coudnt load data00')
                          console.log(weather)
                        }else{
                          console.log('done')
                          console.log(weather)
                        }
            
          }
          
          setLoading(false)
          return<Home />
        }catch(error){
          
          setLoading(false)
          return<Home />
        }
      }
      getWeather()
    },[id])

    React.useEffect(() => { 
      fetchWeather()
      },[id,fetchWeather])
    
      if(loading){
          return <Loading />
      }
      if(!weather){
        return<h4>No Information to Display. Try again</h4>
      }
      const {district, lastUpdated, sunRisetime,sunSettime, basic,situation,Feeling,GroundLevel,Humidity,Pressure,SeaLevel,Temperature,
      } = weather
      return (
        <section className='section cocktail-section'>
           <Link to='/' className='btn btn-primary'>
            Back to home
          </Link> 
          <h2 className='section-title'>{district}</h2>
          <div className='drink'>
                          <div className='drink-info'>
                <p>
                  <span className='drink-data'>lastUpdated :</span>{lastUpdated}
                </p>
                <p>
                  <span className='drink-data'>sunRisetime :</span>{sunRisetime}
                </p>
                <p>
                  <span className='drink-data'>sunSettime :</span>{sunSettime}
                </p>
                <p>
                  <span className='drink-data'>Actual Temperature C :</span>{Temperature}
                </p>
                <p>
                  <span className='drink-data'>General :</span>{basic}
                </p>
                <p>
                  <span className='drink-data'>Clouds :</span>{situation}
                </p><p>
                  <span className='drink-data'>Feeling C :</span>{Feeling}
                </p>
                <p>
                  <span className='drink-data'>GroundLevel Preassure(hpa) :</span>{GroundLevel}
                </p>
                <p>
                  <span className='drink-data'>SeaLevel Preassure(hpa) :</span>{SeaLevel}
                </p>
                <p>
                  <span className='drink-data'>Humidity % :</span>{Humidity}
                </p>
                <p>
                  <span className='drink-data'>Pressure(hpa) :</span>{Pressure}
                </p>
               
                
               
              </div>
          </div>
        </section>
      )
    

}

export default SingleWeather