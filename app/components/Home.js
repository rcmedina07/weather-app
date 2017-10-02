import React, { Component } from 'react';
import InputCity from './InputCity'

const Home = () => (
  <div className="column">
    <h1 className="header">Enter a City and State</h1>
    <InputCity component="home" />
  </div>
);

export default Home;