import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const CityDetails = (props) => {
  return (
    <div>
      <Link to={{pathname: '/days/details', state: { city: props.city, day: props.day, icon: props.icon, time: props.time }}}>
        <ul className="space-list-items">
          <li><img className="icon" src={props.icon} /></li>
          <li><h4><strong>{props.day}</strong></h4></li>
        </ul>
      </Link>
    </div>
  )
}

CityDetails.propTypes = {
  time: PropTypes.object.isRequired,
  day: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired
};

export default CityDetails;