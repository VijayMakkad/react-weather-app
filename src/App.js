import './App.css';
import Search from './components/search/search';
import DetailWeather from './components/detail-weather/detail-weather';
function App() {
  
  const handleOnSearchChange = (searchData) => {
    console.log(searchData)
  }

  return (
    <div className="container">
      <div className="card">
        <Search onSearchChange={handleOnSearchChange} />
        <DetailWeather/>
      </div>
    </div>
  )
}

export default App;
