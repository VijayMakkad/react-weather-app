import '../detail-weather/detail-weather.css'
const DetailWeather = () => {
  return (
    <div className="container-detail">
      <div className="days">
        <p className='idk'>Today</p>
        <p className='idk'>Tomorrow</p>
      </div>

      <div className="details">
        <div className="detail">
          <p>Wind</p>
          <p>10 km/h</p>
        </div>
        <div className="detail">
          <p>Humidity</p>
          <p>50%</p>
        </div>
        <div className="detail">
          <p>Pressure</p>
          <p>1000 hPa</p>
        </div>
        <div className="detail">
          <p>Visibility</p>
          <p>10 km</p>
        </div>
        <div className="detail">
          <p>Sun</p>
          <p>rise: 06:00</p>
          <p>set: 18:00</p>
        </div>
        <div className="detail">
          <p>
            Feels Like <br /> 30°C
          </p>
        </div>
      </div>
    </div>
  )
}
export default DetailWeather