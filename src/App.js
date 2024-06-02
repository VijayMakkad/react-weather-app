import './App.css';
import Search from './components/search/search';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import { useState } from 'react';
import Tabs  from './components/tabs/tabs';
function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  
  const handleOnSearchChange = (searchData) => {
    const [lat,lon]=searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    )

    const forecastWeatherFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    )
    Promise.all([currentWeatherFetch, forecastWeatherFetch])
    .then(async(response)=>{
      const weatherResponse=await response[0].json();
      const forecastResponse = await response[1].json();

      setCurrentWeather({city: searchData.label , ...weatherResponse});
      setForecast({ city: searchData.label, ...forecastResponse })

    })
    .catch((error)=>{
      console.error(error);
    })
  }

  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className="container">
      <div className="card">
        <Search
          onSearchChange={handleOnSearchChange}
          weatherData={currentWeather}
        />
        <Tabs weatherData={currentWeather} forecast={forecast}/>
        {/* <DetailWeather weatherData={currentWeather} /> */}
      </div>
    </div>
  )
}

export default App;
