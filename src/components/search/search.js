import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { geoApiOptions, GEO_API_URL } from '../../api'
import './search.css'

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null)

  const loadOptions = async (inputValue) => {
    return await fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            }
          }),
        }
      })
  }

  const handleOnChange = (searchData) => {
    setSearch(searchData)
    onSearchChange(searchData)
  }

  const customStyles = {
        control: (provided, state) => ({
            ...provided,
            borderRadius: '15px',
            width:'80%',
            margin: '20px auto',
            border: '2px solid #ccc',
            boxShadow: state.isFocused ? '0 0 0 2px #3699FF' : null,
        }),
        option: (provided, state) => ({
            ...provided,
            width:'80%',
            backgroundColor: state.isFocused ? '#3699FF' : null,
            color: state.isFocused ? 'white' : null,
        }),
    }

  return (
    <div className="container-search">
        <div className="search">
          <AsyncPaginate
            placeholder="Search for a City"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
            styles={customStyles}
          />
        </div>
    </div>
  )
}

export default Search
