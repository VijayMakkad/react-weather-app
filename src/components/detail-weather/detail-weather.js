import '../detail-weather/detail-weather.css';

const DetailWeather = ({ weatherData }) => {
  if (!weatherData) {
    return <div className='load'></div>; // Handle the case when weatherData is null
  }

  const getFormattedTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="container-detail">
      <div className="details">
        <div className="detail">
          <p>Wind</p>
          <p>{Math.round(weatherData.wind.speed)*(18/5)} km/h</p>
        </div>
        <div className="detail">
          <p>Humidity</p>
          <p>{weatherData.main.humidity}%</p>
        </div>
        <div className="detail">
          <p>Pressure</p>
          <p>{weatherData.main.pressure} hPa</p>
        </div>
        <div className="detail">
          <p>Visibility</p>
          {weatherData.visibility !== undefined ? (
            <p>{(weatherData.visibility / 1000).toFixed(1)} km</p>
          ) : (
            <p>N/A</p>
          )}
        </div>
        <div className="detail">
          <p>Sun</p>
          <p>rise: {getFormattedTime(weatherData.sys.sunrise)}</p>
          <p>set: {getFormattedTime(weatherData.sys.sunset)}</p>
        </div>
        <div className="detail">
          <p>
            Feels Like <br /><br /> {Math.round(weatherData.main.feels_like - 273.15)}
            °C
          </p>
        </div>
      </div>
    </div>
  )
};

export default DetailWeather;
