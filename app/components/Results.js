import React, { Component } from 'react';
import queryString from 'query-string'
import api from '../utils/api'
import { Link } from 'react-router-dom'
import Loading from './Loading'
import CityDetails from './CityDetails'

const StartOver = () => {
  return (
    <div className="col-sm-12">
      <Link to='/'>
        <button type='button'
          className="button">
          Start Over
                </button>
      </Link>
    </div>
  );
};

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: [],
      days: [],
      icons: [],
      error: null,
      city: "",
      loading: true
    };
  }

  getDays = () => {
    let date = new Date();
    let day = date.getDay();
    let numberDay = date.getDate();
    let daysW = [];
    let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let month = ["Jan", "Feb", "Mach", "Apr", "May", "Jun", "Jul", "Agu", "Sep", "Oct", "Nov", "Dec"];
    for (let i = 0; i < 5; i++) {
      let d = week[day] + " " + month[date.getMonth()] + " " + numberDay;
      daysW[i] = d;
      if (day === 6) {
        day = 0;
      } else {
        day++;
      }
      if (numberDay === 28 && date.getMonth === 2) {
        numberDay = 1;
      } else {
        if (numberDay == 30 && (date.getMonth === 4 || date.getMonth === 8 || date.getMonth === 9 || date.getMonth === 11)) {
          numberDay = 1;
        } else {
          if (numberDay == 31) {
            numberDay = 1;
          } else {
            numberDay++;
          }
        }
      }
    }
    return daysW;
  }
  componentDidMount() {
    let cityName = queryString.parse(this.props.location.search);
    api.getCityInfo(cityName.city).then((data) => {
      if (data === null) {
        return this.setState(() => {
          return {
            error: "Looks like there was a error. Check the writing of the city name",
            loading: false
          }
        });
      }
      let icons = [];
      for (let i = 0; i < 5; i++) {
        let urlIcon = "../dist/images/weather-icons/" + data.list[i].weather[0].icon + ".svg";
        icons[i] = urlIcon;
      }
      this.setState({
        loading: false,
        time: data.list,
        days: this.getDays(),
        icons: icons,
        error: null,
        city: cityName.city
      })
    });
  }
  render() {
    if (this.state.loading === true) {
      return <Loading />
    }
    if (this.state.error) {
      return (
        <div>
          <p>{error}</p>
          <Link className="reset" to="/"> Reset</Link>
        </div>
      )
    }
    return (
      <div className="container">
        <h1 className="header">St. {this.state.city}</h1>
        <ul className="list">
          <li className="list-item">
            <CityDetails day={this.state.days[0]} time={this.state.time[0]} icon={this.state.icons[0]} city={this.state.city} />
          </li>
          <li className="list-item">
            <CityDetails day={this.state.days[1]} time={this.state.time[1]} icon={this.state.icons[1]} city={this.state.city} />
          </li>
          <li className="list-item">
            <CityDetails day={this.state.days[2]} time={this.state.time[2]} icon={this.state.icons[2]} city={this.state.city} />
          </li>
          <li className="list-item">
            <CityDetails day={this.state.days[3]} time={this.state.time[3]} icon={this.state.icons[3]} city={this.state.city} />
          </li>
          <li className="list-item">
            <CityDetails day={this.state.days[4]} time={this.state.time[4]} icon={this.state.icons[4]} city={this.state.city} />
          </li>
        </ul>
        <div>
          <StartOver />
        </div>
      </div>
    );
  }
}

export default Results;