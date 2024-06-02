import './current-weather.css'
import '../search/search.css'

const CurrentWeather = ({ weatherData }) => {
  if (!weatherData) {
    return <div className='load'>Enter the City</div> // Handle the case when weatherData is null
  }

  var n = new Date()
  const currDate = n.toLocaleDateString('es-CL')
  const currTime = new Date().toLocaleTimeString()
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const dayOfWeek = daysOfWeek[n.getDay()]

  const hours = new Date().getHours()
  const isDayTime = hours > 6 && hours < 20

  return (
    <div className="weather">
      <div className="top">
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${weatherData.weather[0].icon}.png`}
        />
        <div>
          <span className="temperature">
            {(weatherData.main.temp - 273.15).toFixed(2)}°C
          </span>
          <p className="weather-desc">{weatherData.weather[0].description}</p>
          <hr />
        </div>
        <div className="time">
          <p>{currDate}</p>
          <p>
            {dayOfWeek}, {currTime}
          </p>
          <p>{isDayTime ? 'Day' : 'Night'}</p> {/* day or night */}
        </div>
        <p className="city">{weatherData.city}</p>
      </div>
    </div>
  )
}

export default CurrentWeather
