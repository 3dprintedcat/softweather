import React from 'react';
import { CloudOutlined } from '@ant-design/icons';
import './WeatherCircle.css'; // assuming you have a WeatherCircle.css file for your custom styles
import '../App.css'
import './WaveAnimation.css'; // import the wave animation CSS
import { Cloud, CloudSnow } from 'react-bootstrap-icons';
function WeatherCircle({ humidity }) {
  // Convert humidity level to a percentage
  const humidityPercentage = `${ humidity}%`;

  // Create a linear gradient background that fills up based on the humidity level
  const background = `linear-gradient(0deg, #bbbbff 0%, #0000ff ${humidityPercentage}, transparent ${humidityPercentage})`;

  return (<>
    <div className="neumorphic-inset" style={{borderRadius:"50%", margin:"2em", padding:"1em", background}}>
      <div className="neumorphic" style={{borderRadius:"50%", margin:"0em", padding:"2em"}}>
        <div className="neumorphic" style={{borderRadius:"50%", margin:"0em", padding:"2em"}}>
          <CloudSnow size={96} color={"#444444"}/>
        </div>
      </div>
    </div>
    </>
  );
}

export default WeatherCircle;
