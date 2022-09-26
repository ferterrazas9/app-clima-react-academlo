import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import WeatherCard from './components/WeatherCard'
import Loading from './components/Loading'

function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temperature, setTemperature] = useState()


  useEffect(() => {
    const success = pos => {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setCoords(obj);
    }

    navigator.geolocation.getCurrentPosition(success)
  }, [])

  useEffect(() => {
    if (coords) {
      const APIKEY = '5ef613656bbb6f84f149b515c2d343e8'
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`
      axios.get(URL)

        .then(res => {
          const celsius = (res.data.main.temp - 273.15).toFixed(0)
          const farenheit = (celsius * 9 / 5 + 32).toFixed(0)
          setTemperature({ celsius, farenheit })
          setWeather(res.data)
        })


        .catch(err => console.log(err))
    }
  }, [coords])

  console.log(weather)
  return (
    <div className="App">
      {
        weather ?
          <WeatherCard weather={weather} temperature={temperature} />
          :
          <Loading />

      }
    </div>
  )
}

export default App
