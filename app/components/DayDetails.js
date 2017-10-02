import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const DayDetails = (props) => {
  return (
    <div className="container">
      <ul className="column">
        <li><img className="icon" src={props.location.state.icon} /> </li>
        <li><h1 className="header"><strong>{props.location.state.city}</strong></h1></li>
        <li><h2>{props.location.state.day}</h2></li>
        <li><h3>"{props.location.state.time.weather[0].description}"</h3></li>
        <li><h3>Min temp: {Math.round(props.location.state.time.temp.min - 273)} degrees</h3></li>
        <li><h3>Max temp: {Math.round(props.location.state.time.temp.min - 273)} degrees</h3></li>
        <li><h3>Humidity: {props.location.state.time.humidity}</h3></li>
      </ul>
    </div>
  )
}
export default DayDetails;