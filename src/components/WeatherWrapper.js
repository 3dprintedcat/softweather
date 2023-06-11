import React from 'react';
import WeatherCircle from './WeatherCircle'; // import the WeatherCircle component

function WeatherWrapper({ humidity }) {
  // Function to map humidity to a color
  const getBackgroundColor = (humidity) => {
    const red = Math.round(255 * (humidity / 100));
    const blue = Math.round(255 * (1 - humidity / 100));
    return `rgb(${red}, 0, ${blue})`;
  };

  return (
    <div style={{ backgroundColor: getBackgroundColor(humidity), padding: '20px' }}>
      <WeatherCircle />
    </div>
  );
}

export default WeatherWrapper;
