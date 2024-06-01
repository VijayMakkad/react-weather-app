import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';
function App() {
  
  const handleOnSearchChange = (searchData) => {
    console.log(searchData)
  }

  return (
    <div className="container">
      <div className='card'>
      <Search onSearchChange={handleOnSearchChange}/>
      <CurrentWeather />
      </div>
    </div>
  );
}

export default App;
