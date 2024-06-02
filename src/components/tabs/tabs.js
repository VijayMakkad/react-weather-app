import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import './tabs.css'
import DetailWeather from '../detail-weather/detail-weather'

export default function ColorTabs({ weatherData}) {
  const [value, setValue] = React.useState('one')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box className="tabs-container">
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab
          value="one"
          label="Today"
          sx={{ fontSize: '30px', color: 'white', fontFamily: 'Poppins' }}
          className="custom-tab"
        />
        <Tab
          value="two"
          label="Tomorrow"
          sx={{ fontSize: '30px', color: 'white', fontFamily: 'Poppins' }}
          className="custom-tab"
        />
      </Tabs>
      <Box className="tab-content">
        {value === 'one' && (
          <Box>
            <Typography className="tab-text" sx={{ fontFamily: 'Poppins' }}>
              <DetailWeather weatherData={weatherData} />
            </Typography>
            {/* Add more details specific to "Today" here */}
          </Box>
        )}
        {value === 'two' && (
          <Box>
            <Typography className="tab-text" sx={{ fontFamily: 'Poppins' }}>
              Content for Tomorrow
            </Typography>
            {/* Add more details specific to "Tomorrow" here */}
          </Box>
        )}
      </Box>
    </Box>
  )
}
