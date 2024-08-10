import React from 'react';
import '@aws-amplify/ui-react/styles.css';
import Container from './Container';
import Nav from './Nav';
import GetWeather from './GetWeather';

const Page1 = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello</h1>
        <GetWeather></GetWeather>
      </header>
    </div>
  );
}

export default Page1