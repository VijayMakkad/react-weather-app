import './current-weather.css'

const CurrentWeather = ({ weatherData }) => {
    return (
        <div className='weather'>
            <div className='top'>
                <p className='city'>New York</p>
                <p className='weather-desc'>Sunny</p>
            </div>
            <img alt='weather' className='weather-icon' src=''/>
        </div>
    )
}

export default CurrentWeather;