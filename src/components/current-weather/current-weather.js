import './current-weather.css'
import '../search/search.css'
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

const CurrentWeather = ({ weatherData }) => {
    return (
      <div className="weather">
        <div className="top">
          <img alt="weather" className="weather-icon" src="icons/01d.png" />
          <div>
            <span className="temperature">25°C</span>
            <p className="weather-desc">Sunny</p>
            <hr />
          </div>
          <div className="time">
            <p>{currDate}</p>
            <p>
              {dayOfWeek}, {currTime}
            </p>
            <p>Day</p>
          </div>
          <p className="city">New York</p>
        </div>
      </div>
    )
}

export default CurrentWeather;