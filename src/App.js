import './App.css';
import Search from './components/search/search';

function App() {
  
  const handleOnSearchChange = (searchData) => {
    console.log(searchData)
  }

  return (
    <div className="container">
      <div className='card'>
      <Search onSearchChange={handleOnSearchChange}/>
      </div>
    </div>
  );
}

export default App;
