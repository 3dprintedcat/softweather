import React from 'react';
import { CloudOutlined } from '@ant-design/icons';
import './WeatherCircle.css'; // assuming you have a WeatherCircle.css file for your custom styles
import '../App.css'
import './WaveAnimation.css'; // import the wave animation CSS
import { Cloud, CloudSnow } from 'react-bootstrap-icons';
import { Space } from 'antd';
function WeatherCircle({ humidity }) {
  // Convert humidity level to a percentage
  const humidityPercentage = `${ humidity}%`;

  // Create a linear gradient background that fills up based on the humidity level
  const background = `linear-gradient(0deg, #bbbbff 0%, #0000ff ${humidityPercentage}, transparent ${humidityPercentage})`;

  return (<>
    <div className="cutOut" style={{borderRadius:"50%", margin:"2em", padding:"1em", background}}>
      <div className="neumorphic" style={{borderRadius:"50%", margin:"0em", padding:"2em"}}>
          <Space direction="vertical" style={{width:"11em", height:"11em"}}>
        <div className="neumorphic" style={{borderRadius:"50%", margin:"0em", padding:"2em",width:"7em", height:"7em",position:"relative",top:"-10px",display:"flex", alignContent:"center"}}>
          <CloudSnow size={"7em"} color={"#444444"} style={{textAlign:"center"}}/>
        </div>
        <p style={{textAlign:"center", fontSize:"1.8em", margin:0, position:"relative",color:"#444444",top:"-15px"}}>78ºF</p>
          </Space>
      </div>
    </div>
    </>
  );
}

export default WeatherCircle;
