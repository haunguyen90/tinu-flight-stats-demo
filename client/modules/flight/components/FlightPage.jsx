import React from 'react';
import PropTypes from 'prop-types';
import { SingleDatePicker } from 'react-dates';
import { findWhere } from 'underscore';
import moment from 'moment';
import 'react-dates/lib/css/_datepicker.css';

import { isInclusivelyAfterDay } from '/client/lib';
import FlightItem from './FlightItem';
import FlightSummary from './FlightSummary';
import FlightReturn from './FlightReturn';
import FlightHeaderList from './FlightHeaderList';

class FlightPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flightDate: moment(),
      focused: false,
      flightNumber: '',
      flighSelected: [],
    }
    this.handleSelected = this.handleSelected.bind(this);
  }

  onSearchFlight = () => {
    const { searchFlight } = this.props;
    const { flightDate, flightNumber } = this.state;

    searchFlight(flightDate.format('DD MMM YYYY'), flightNumber);
    this.setState({ flighSelected: [] });
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

  handleSelected = (flightData) => {
    const { flighSelected } = this.state;
    flighSelected.push(flightData);
    this.setState({ flighSelected });
  }

  getAirportName = (airportCode) => {
    const matchedAirport = this.props.airports.find(({ fs }) => fs === airportCode);
    if (matchedAirport) {
      return matchedAirport.name;
    }
    return 'Not Found';
  }

  selectAll = (e) => {
    let { flighSelected } = this.state;
    if (e.target.checked) {
      const { scheduledFlights } = this.props;
      flighSelected = scheduledFlights.map(item => (item.referenceCode));
    } else {
      flighSelected = [];
    }
    this.setState({ flighSelected });
  }

  isBiBirectional = () => {
    const { scheduledFlights } = this.props;
    let isMatch = false;
    if (scheduledFlights.length === 2) {
      if (scheduledFlights[0].departureAirportFsCode === scheduledFlights[1].arrivalAirportFsCode && scheduledFlights[0].arrivalAirportFsCode === scheduledFlights[1].departureAirportFsCode) {
        isMatch = true;
      }
    }

    return isMatch;
  }

  render() {
    return (
      <div className="main-page main-page--flight">
        <div className="search-flight-bar">
          <div className="zigvy-form-group zigvy-form-group--inline">
            <label htmlFor="flight-date" className="zigvy-form-group__label">
              Flight Date:
            </label>

            <div className="zigvy-form-group__input-datepicker">
              <SingleDatePicker
                id="flight-date"
                displayFormat="DD MMM YYYY"
                isOutsideRange={day => !isInclusivelyAfterDay(day, moment()) || isInclusivelyAfterDay(day, moment().add(12, 'month'))}
                date={this.state.flightDate}
                onDateChange={date => this.setState({ flightDate: date })}
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

          <div className="zigvy-form-group zigvy-form-group--inline">
            <button className="btn btn-primary" onClick={this.onSearchFlight} >Search Flight</button>
          </div>
        </div>
        <div className="result-section">
          <div className="result-section__list">
            <FlightHeaderList isReturn={this.isBiBirectional()} />
            <div className="result-section__body">
              {
                !this.isBiBirectional()
                ?
                  this.props.scheduledFlights.map((flightData, index) => (
                    <FlightItem
                      key={index}
                      flightData={flightData}
                      airlines={this.props.airlines}
                      airports={this.props.airports}
                      handleSelected={this.handleSelected}
                      getAirportName={this.getAirportName}
                      isChecked={!!findWhere(this.state.flighSelected, { referenceCode: flightData.referenceCode })}
                    />
                  ))
                :
                  <FlightReturn
                    scheduledFlights={this.props.scheduledFlights}
                    getAirportName={this.getAirportName}
                    handleSelected={this.handleSelected}
                    isChecked={!!findWhere(this.state.flighSelected, { isReturn: true })}
                  />
              }
            </div>
          </div>
          {
            this.state.flighSelected.length > 0
            ?
              <div className="result-section__summary">
                <div className="result-section__summary__title">
                  <span>Booked Summary</span>
                </div>
                <FlightSummary flighSelected={this.state.flighSelected} getAirportName={this.getAirportName} />
              </div>
            :
              null
          }
        </div>
      </div>
    )
  }
}

export default FlightPage;
