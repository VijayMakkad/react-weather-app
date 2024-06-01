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

  return (
    <div className="container">
      <div className="line">
        <AsyncPaginate
          placeholder="Search for a City"
          debounceTimeout={600}
          value={search}
          onChange={handleOnChange}
          loadOptions={loadOptions}
        />
      </div>
    </div>
  )
}

export default Search
