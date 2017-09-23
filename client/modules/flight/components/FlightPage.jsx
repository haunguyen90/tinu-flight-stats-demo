import React from 'react';
import PropTypes from 'prop-types';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';

import 'react-dates/lib/css/_datepicker.css';

import { isInclusivelyAfterDay } from '/client/lib';

class FlightPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: moment(),
      focused: false,
      flightNumber: '',
    }
  }

  onFlightNumberChange = (event) => {
    event.preventDefault();

    let value = event.currentTarget.value;
    if (value.length > 2) {
      value = value.replace(/^.{2}(.*)/, (match, p1) => {
        const newString = match.replace(p1, '');
        const flight = parseInt(p1);
        return newString + flight;
      });
    }
    this.setState(() => ({ flightNumber: value.toUpperCase() }));
  }

  render() {
    return (
      <div className="main-page main-page--flight">
        <div className="zigvy-form-group zigvy-form-group--inline">
          <label htmlFor="flight-date" className="zigvy-form-group__label">
            Flight Date:
          </label>

          <div className="zigvy-form-group__input-datepicker">
            <SingleDatePicker
              id="flight-date"
              displayFormat="DD MMM YYYY"
              isOutsideRange={day => !isInclusivelyAfterDay(day, moment()) || isInclusivelyAfterDay(day, moment().add(12, 'month'))}
              date={this.state.date}
              onDateChange={date => this.setState({ date })}
              focused={this.state.focused}
              onFocusChange={({ focused }) => this.setState({ focused })}
            />
          </div>
        </div>

        <div className="zigvy-form-group zigvy-form-group--inline">
          <label htmlFor="flight-number" className="zigvy-form-group__label">
            Flight Number:
          </label>
          <input
            type="text"
            id="flight-number"
            className="zigvy-form-group__input"
            minLength={3}
            maxLength={6}
            onChange={this.onFlightNumberChange}
            value={this.state.flightNumber}
          />
        </div>
      </div>
    )
  }
}

export default FlightPage;
