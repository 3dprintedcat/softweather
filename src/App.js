import React from 'react';
import { Button, Card, Col, Row, Space } from 'antd';
import './App.css'; // assuming you have an App.css file for your custom styles
import WeatherCircle from './components/WeatherCircle';
import { Book, Calendar, Calendar2, Thermometer, ThermometerHalf } from 'react-bootstrap-icons';

function App() {
  return (
    <div className="App" style={{overflow:"hidden", height:"100%"}}>
      <WeatherCircle humidity={20}/>
      <Space size={'large'}>
      <Col>
      <Button className='neumorphicButton' span={6} style={{width:"5em", height: "5em"}}><ThermometerHalf size={"2em"} color={"#444444"}/></Button>
      </Col>
      <Col>
      <Button className='neumorphicButton' span={6} style={{width:"5em", height: "5em"}}><Book style={{fontSize:"2em", color:"#444444"}}/></Button>
      </Col>
      <Col>
      <Button className='neumorphicButton' span={6} style={{width:"5em", height: "5em"}}><Calendar2 style={{fontSize:"2em", color:"#444444"}}/></Button>
      </Col>
      </Space> 
        <div className='neumorphic'style={{ margin:"1.5em" , padding :".5em", borderRadius:"15px"}}>  
        <Card className='neumorphic-inset' style={{ width:"300px",height:"fit-content"}}>
          <Card className='material'>78ºF</Card>
          <Card className='material'>70ºF</Card>
          <Card className='material'>72ºF</Card>
          <Card className='material'>75ºF</Card>
          <Card className='material'>80ºF</Card>
          <Card className='material'>80ºF</Card>
          </Card>    
        </div>
    </div>
  );
}

export default App;
