import React from 'react';
import { CloudOutlined } from '@ant-design/icons';
import './WeatherCircle.css'; // assuming you have a WeatherCircle.css file for your custom styles

function WeatherCircle() {
  return (
    <div className="weather-circle">
      <CloudOutlined style={{ fontSize: '100px' }} /> {/* Adjust size as needed */}
    </div>
  );
}

export default WeatherCircle;
