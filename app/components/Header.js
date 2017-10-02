import React, { Component } from 'react';
import InputCity from './InputCity'
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <nav className="navbar navbar-static-top" role="navigation">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to='/' className="navbar-brand">
            Weather App
        </Link>
        </div>
        <div className="collapse navbar-collapse" id="bar">
          <form className="navbar-form navbar-right" role="search">
            <InputCity component="header"/>
          </form>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;