import React from 'react';
import { Button, Card } from 'antd';
import './App.css'; // assuming you have an App.css file for your custom styles
import WeatherCircle from './components/WeatherCircle';

function App() {
  return (
    <div className="App">
      <WeatherCircle/>
      <Button className="neumorphic">Neumorphic Button</Button>
      <Card className="neumorphic" title="Neumorphic Card">
        This is a card with neumorphic design.
      </Card>
    </div>
  );
}

export default App;
