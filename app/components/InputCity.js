import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

class InputCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
    }
  }
  handleChange = (event) => {
    let value = event.target.value;
    this.setState(() => {
      return {
        cityName: value
      }
    });
  }
  render() {
    return (
      <div className={this.props.component === "header" ? "row" : ""}>
        <input
          id="city"
          placeholder="St Montevideo, Uruguay"
          type="text"
          value={this.state.cityName}
          onChange={this.handleChange}
        />
        {this.state.cityName
          ? <Link className="button"
            to={{
              pathname: '/results',
              search: `?city=` + this.state.cityName
            }}>
            Get Weather
        </Link>
          : <button
            className="button"
            type="submit"
            disabled={!this.state.cityName}>
            Get Weather
          </button>
        }
      </div>
    );
  }
}

export default InputCity;
